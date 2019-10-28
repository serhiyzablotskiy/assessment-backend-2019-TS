"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../../lib");
const services_1 = require("../../services");
class ReadIncident extends lib_1.ApiOperation {
    constructor(parameters) {
        super("Incident", parameters);
        this.incidentService = new services_1.IncidentService(this.model);
    }
    action() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = this.parameters;
            const incident = yield this.incidentService.getIncident(id);
            if (!incident) {
                throw lib_1.Errors.NotFoundError("An incident with passed id was not found");
            }
            return incident;
        });
    }
    beforeAction() {
        this._validateParameters();
        return Promise.resolve();
    }
    _validateParameters() {
        const { id } = this.parameters;
        const isIdValid = services_1.IncidentService.isIdValid(id);
        if (!isIdValid) {
            throw lib_1.Errors.InvalidParametersError(`ObjectId can not be represented by ${id}`);
        }
    }
}
exports.default = ReadIncident;
//# sourceMappingURL=readIncident.js.map