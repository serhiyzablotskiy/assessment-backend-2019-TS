import { ApiOperation, Errors } from "../../lib";
import { IncidentService } from "../../services";

class DeleteIncident extends ApiOperation {
  private incidentService: IncidentService;

  constructor(parameters: any) {
    super("Incident", parameters);
    this.incidentService = new IncidentService(this.model);
  }

  public async action() {
    const { id } = this.parameters;
    try {
      await this.incidentService.deleteIncident(id);
    } catch (error) {
      return { isSuccess: false };
    }

    return { isSuccess: true };
  }

  protected async beforeAction() {
    this._validateParameters();
    await this._validateIncident();
  }

  private _validateParameters() {
    const { id } = this.parameters;

    const isIdValid = IncidentService.isIdValid(id);
    if (!isIdValid) { throw Errors.InvalidParametersError(`ObjectId can not be represented by ${id}`); }
  }

  private async _validateIncident() {
    const { id } = this.parameters;
    const incident = await this.incidentService.getIncident(id);

    if (!incident) { throw Errors.NotFoundError("An incident with passed id was not found"); }
  }
}

export default DeleteIncident;
