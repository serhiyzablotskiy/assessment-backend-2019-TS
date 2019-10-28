import { ApiOperation, Errors } from "../../lib";
import { User as UserModel } from "../../models";
import { IncidentService, UserService } from "../../services";

class CreateIncident extends ApiOperation {
  private incidentService: IncidentService;

  constructor(parameters: any) {
    super("Incident", parameters);
    this.incidentService = new IncidentService(this.model);
  }

  public async action() {
    const userService = new UserService(UserModel);
    const engineer = await userService.getEngineer();

    if (!engineer) { throw Errors.NotFoundError("There is no user with engineer role"); }

    const { incident } = this.parameters;
    const { _id: assignee } = engineer;
    const status = "Created";
    const incindentParameters = { ...incident, assignee, status };

    return this.incidentService.createIncident(incindentParameters);
  }

  protected beforeAction() {
    this._validateParameters();
    return Promise.resolve();
  }

  private _validateParameters() {
    const { incident } = this.parameters;
    const { title, status } = incident;

    const isTitleValid = title && title.length > 0;
    if (!isTitleValid) { throw Errors.InvalidParametersError("An incident should have a title"); }
  }
}

export default CreateIncident;
