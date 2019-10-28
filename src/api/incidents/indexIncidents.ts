import { ApiOperation } from "../../lib";
import { IncidentService } from "../../services";

class IndexIncidents extends ApiOperation {
  private incidentService: IncidentService;

  constructor(parameters: any) {
    super("Incident", parameters);
    this.incidentService = new IncidentService(this.model);
  }

  public async action() {
    const { limit = 10, offset = 0 } = this.parameters;

    const count = await this.incidentService.countIncidents();
    const incidents = await this.incidentService.getIncidents({ limit, offset });

    return { records: incidents, metadata: { limit, offset, count} };
  }
}

export default IndexIncidents;
