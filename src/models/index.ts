import { Document, Model } from "mongoose";
import Incident from "./Incident";
import User from "./User";

export { default as Incident } from "./Incident";
export { default as User } from "./User";

interface IModels {
  [key: string]: Model<Document>;
}

const models: IModels = { Incident, User };

export default function(modelName: string) {
  return models[modelName];
}
