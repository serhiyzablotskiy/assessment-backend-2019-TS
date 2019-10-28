import { Document, Model, model, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  role: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  name:  { type: String, required: true },
  role: { type: String, required: true, enum: ["Engineer", "Supervisor"] }
}, { timestamps: true });

const User: Model<IUser> = model<IUser>("User", UserSchema);
export default User;
