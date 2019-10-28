"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
const graphql_tools_1 = require("graphql-tools");
const resolvers_1 = __importDefault(require("./resolvers"));
const typeDefs = __importStar(require("./schema.graphql"));
const schema = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers: resolvers_1.default });
exports.default = schema;
//# sourceMappingURL=schema.js.map