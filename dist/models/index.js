"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Incident_1 = __importDefault(require("./Incident"));
const User_1 = __importDefault(require("./User"));
var Incident_2 = require("./Incident");
exports.Incident = Incident_2.default;
var User_2 = require("./User");
exports.User = User_2.default;
const models = { Incident: Incident_1.default, User: User_1.default };
function default_1(modelName) {
    return models[modelName];
}
exports.default = default_1;
//# sourceMappingURL=index.js.map