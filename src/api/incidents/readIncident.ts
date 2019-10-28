import { ApiOperation, Errors } from "../../lib";
import { IncidentService } from "../../services";

class ReadIncident extends ApiOperation {
  private incidentService: IncidentService;

  constructor(parameters: any) {
    super("Incident", parameters);
    this.incidentService = new IncidentService(this.model);
  }

  public async action() {
    const { id } = this.parameters;
    const incident = await this.incidentService.getIncident(id);

    if (!incident) { throw Errors.NotFoundError("An incident with passed id was not found"); }

    return incident;
  }

  protected beforeAction() {
    this._validateParameters();
    return Promise.resolve();
  }

  private _validateParameters() {
    const { id } = this.parameters;

    const isIdValid = IncidentService.isIdValid(id);
    if (!isIdValid) { throw Errors.InvalidParametersError(`ObjectId can not be represented by ${id}`); }
  }
}

export default ReadIncident;
