"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const InvalidParametersError = (message = "Invalid parameters") => {
    return new apollo_server_express_1.ApolloError(message, "400");
};
const NotFoundError = (message = "A data record was not found") => {
    return new apollo_server_express_1.ApolloError(message, "404");
};
const OperationError = (message = "Operation cannot be processed") => {
    return new apollo_server_express_1.ApolloError(message, "401");
};
exports.default = {
    InvalidParametersError,
    NotFoundError,
    OperationError
};
//# sourceMappingURL=Errors.js.map