import { Document, Model, Query, Types } from "mongoose";

export interface IIncident {
  title: string;
  assignee: string;
  status: string;
  description?: string;
}

export interface IIndexParameters {
  offset: number;
  limit: number;
}

class IncidentService {

  public static availableStatuses: string[] = ["Created", "Acknowledged", "Resolved"];

  public static isIdValid(id: string): boolean {
    return Types.ObjectId.isValid(id);
  }

  public static isStatusValid(status: string): boolean {
    return IncidentService.availableStatuses.includes(status);
  }

  private IncidenModel: Model<Document>;

  constructor(IncidenModel: Model<Document>) {
    this.IncidenModel = IncidenModel;
  }

  public getIncident(id: string) {
    return this.IncidenModel.findOne({ _id: id });
  }

  public createIncident(incident: IIncident) {
    return this.IncidenModel.create(incident);
  }

  public deleteIncident(id: string) {
    return this.IncidenModel.deleteOne({ _id: id });
  }

  public countIncidents(): Query<number> {
    return this.IncidenModel.countDocuments();
  }

  public getIncidents(parameters: IIndexParameters) {
    const { offset, limit } = parameters;
    return this.IncidenModel.find().skip(offset).limit(limit);
  }

  public async acknowledgeIncident(id: string): Promise<Document> {
    await this.IncidenModel.updateOne({ _id: id }, { status: "Acknowledged" });
    return this.getIncident(id);
  }

  public async resolveIncident(id: string) {
    await this.IncidenModel.updateOne({ _id: id }, { status: "Resolved" });
    return this.getIncident(id);
  }

  public async assigneIncident(id: string, assignee: string) {
    await this.IncidenModel.updateOne({ _id: id }, { assignee });
    return this.getIncident(id);
  }
}

export default IncidentService;
