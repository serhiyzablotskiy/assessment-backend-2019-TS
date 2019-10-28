import { ApiOperation, Errors } from "../../lib";
import { User as UserModel } from "../../models";
import { IncidentService, UserService } from "../../services";

class AssignIncident extends ApiOperation {
  private incidentService: IncidentService;

  constructor(parameters: any) {
    super("Incident", parameters);
    this.incidentService = new IncidentService(this.model);
  }

  public async action() {
    const { id, assignee } = this.parameters;
    return this.incidentService.assigneIncident(id, assignee);
  }

  protected async beforeAction() {
    this._validateParameters();
    await this._validateAssignee();
    await this._validateIncident();
  }

  private _validateParameters() {
    const { id, assignee } = this.parameters;

    const isIdValid = IncidentService.isIdValid(id);
    if (!isIdValid) { throw Errors.InvalidParametersError(`ObjectId can not be represented by ${id}`); }

    const isAssigneeValid = UserService.isIdValid(assignee);
    if (!isAssigneeValid) { throw Errors.InvalidParametersError(`ObjectId can not be represented by ${assignee}`); }
  }

  private async _validateAssignee() {
    const { assignee } = this.parameters;
    const userService = new UserService(UserModel);

    const user = await userService.getUser(assignee);
    if (!user) { throw Errors.NotFoundError("There is no user with passsed id"); }
  }

  private async _validateIncident() {
    const { id } = this.parameters;
    const incident = await this.incidentService.getIncident(id);

    if (!incident) { throw Errors.NotFoundError("An incident with passed id was not found"); }
  }
}

export default AssignIncident;
