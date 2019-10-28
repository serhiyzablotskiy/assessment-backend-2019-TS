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
class CreateIncident extends lib_1.ApiOperation {
    constructor(parameters) {
        super("Incident", parameters);
        this.incidentService = new services_1.IncidentService(this.model);
    }
    action() {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = new services_1.UserService(models_1.User);
            const engineer = yield userService.getEngineer();
            if (!engineer) {
                throw lib_1.Errors.NotFoundError("There is no user with engineer role");
            }
            const { incident } = this.parameters;
            const { _id: assignee } = engineer;
            const status = "Created";
            const incindentParameters = Object.assign(Object.assign({}, incident), { assignee, status });
            return this.incidentService.createIncident(incindentParameters);
        });
    }
    beforeAction() {
        this._validateParameters();
        return Promise.resolve();
    }
    _validateParameters() {
        const { incident } = this.parameters;
        const { title, status } = incident;
        const isTitleValid = title && title.length > 0;
        if (!isTitleValid) {
            throw lib_1.Errors.InvalidParametersError("An incident should have a title");
        }
    }
}
exports.default = CreateIncident;
//# sourceMappingURL=createIncident.js.map