"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const acknowledgeIncident_1 = __importDefault(require("./acknowledgeIncident"));
const assignIncident_1 = __importDefault(require("./assignIncident"));
const createIncident_1 = __importDefault(require("./createIncident"));
const deleteIncident_1 = __importDefault(require("./deleteIncident"));
const indexIncidents_1 = __importDefault(require("./indexIncidents"));
const readIncident_1 = __importDefault(require("./readIncident"));
const resolveIncident_1 = __importDefault(require("./resolveIncident"));
exports.default = {
    acknowledgeIncident: acknowledgeIncident_1.default,
    assignIncident: assignIncident_1.default,
    createIncident: createIncident_1.default,
    deleteIncident: deleteIncident_1.default,
    indexIncidents: indexIncidents_1.default,
    readIncident: readIncident_1.default,
    resolveIncident: resolveIncident_1.default
};
//# sourceMappingURL=index.js.map