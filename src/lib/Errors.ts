import { ApolloError } from "apollo-server-express";

export type IError = (message: string) => ApolloError;

const InvalidParametersError: IError = (message: string = "Invalid parameters") => {
  return new ApolloError(message, "400");
};

const NotFoundError: IError = (message: string = "A data record was not found") => {
  return new ApolloError(message, "404");
};

const OperationError: IError = (message: string = "Operation cannot be processed") => {
  return new ApolloError(message, "401");
};

export default {
  InvalidParametersError,
  NotFoundError,
  OperationError
};
