import { Document, Model, model, Schema } from "mongoose";

export interface IIncident extends Document {
  assignee: string;
  description: string;
  status: string;
  title: string;
}

const IncidentSchema: Schema = new Schema({
  assignee: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["Created", "Acknowledged", "Resolved"] },
  title: { required: true, type: String }
}, { timestamps: true });

const Incident: Model<IIncident> = model<IIncident>("Incident", IncidentSchema);
export default Incident;
