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
const api_1 = __importDefault(require("../api"));
const lib_1 = require("../lib");
const schema = __importStar(require("./schema.graphql"));
const resolversBuilder = new lib_1.ResolversBuilder(schema, api_1.default);
exports.default = resolversBuilder.buildResolvers();
//# sourceMappingURL=resolvers.js.map