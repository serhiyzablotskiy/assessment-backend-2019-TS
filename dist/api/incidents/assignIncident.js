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
const models_1 = require("../../models");
const services_1 = require("../../services");
class AssignIncident extends lib_1.ApiOperation {
    constructor(parameters) {
        super("Incident", parameters);
        this.incidentService = new services_1.IncidentService(this.model);
    }
    action() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, assignee } = this.parameters;
            return this.incidentService.assigneIncident(id, assignee);
        });
    }
    beforeAction() {
        return __awaiter(this, void 0, void 0, function* () {
            this._validateParameters();
            yield this._validateAssignee();
            yield this._validateIncident();
        });
    }
    _validateParameters() {
        const { id, assignee } = this.parameters;
        const isIdValid = services_1.IncidentService.isIdValid(id);
        if (!isIdValid) {
            throw lib_1.Errors.InvalidParametersError(`ObjectId can not be represented by ${id}`);
        }
        const isAssigneeValid = services_1.UserService.isIdValid(assignee);
        if (!isAssigneeValid) {
            throw lib_1.Errors.InvalidParametersError(`ObjectId can not be represented by ${assignee}`);
        }
    }
    _validateAssignee() {
        return __awaiter(this, void 0, void 0, function* () {
            const { assignee } = this.parameters;
            const userService = new services_1.UserService(models_1.User);
            const user = yield userService.getUser(assignee);
            if (!user) {
                throw lib_1.Errors.NotFoundError("There is no user with passsed id");
            }
        });
    }
    _validateIncident() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = this.parameters;
            const incident = yield this.incidentService.getIncident(id);
            if (!incident) {
                throw lib_1.Errors.NotFoundError("An incident with passed id was not found");
            }
        });
    }
}
exports.default = AssignIncident;
//# sourceMappingURL=assignIncident.js.map