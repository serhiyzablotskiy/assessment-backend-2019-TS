import { Document, DocumentQuery, Model, Types } from "mongoose";
import { IUser } from "../models/User";

class UserService {
  public static isIdValid(id: string) {
    return Types.ObjectId.isValid(id);
  }
  private UserModel: Model<Document>;

  constructor(UserModel: Model<Document>) {
    this.UserModel = UserModel;
  }

  public getEngineer() {
    return this.UserModel.findOne({ role: "Engineer" });
  }

  public getUser(id: string) {
    return this.UserModel.findOne({ _id: id });
  }
}

export default UserService;
