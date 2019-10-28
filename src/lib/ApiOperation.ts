import { Document, Model } from "mongoose";
import models from "../models";

export interface IApiOperation {
  execute(): Promise<any>;
}

class ApiOperation implements IApiOperation {
  protected model: Model<Document>;
  protected parameters: any;

  constructor(modelName: string, parameters: any) {
    this.model = models(modelName);
    this.parameters = parameters;
  }

  public async execute(): Promise<any> {
    await this.initialize();
    await this.beforeAction();
    const response = await this.action();
    await this.afterAction();

    return response;
  }

  protected async initialize() {
    return Promise.resolve();
  }

  protected async beforeAction() {
    return Promise.resolve();
  }

  protected async action(): Promise<any> {
    return Promise.resolve();
  }

  protected async afterAction() {
    return Promise.resolve();
  }
}

export default ApiOperation;
