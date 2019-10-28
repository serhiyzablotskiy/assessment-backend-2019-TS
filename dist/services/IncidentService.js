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
const mongoose_1 = require("mongoose");
class IncidentService {
    constructor(IncidenModel) {
        this.IncidenModel = IncidenModel;
    }
    static isIdValid(id) {
        return mongoose_1.Types.ObjectId.isValid(id);
    }
    static isStatusValid(status) {
        return IncidentService.availableStatuses.includes(status);
    }
    getIncident(id) {
        return this.IncidenModel.findOne({ _id: id });
    }
    createIncident(incident) {
        return this.IncidenModel.create(incident);
    }
    deleteIncident(id) {
        return this.IncidenModel.deleteOne({ _id: id });
    }
    countIncidents() {
        return this.IncidenModel.countDocuments();
    }
    getIncidents(parameters) {
        const { offset, limit } = parameters;
        return this.IncidenModel.find().skip(offset).limit(limit);
    }
    acknowledgeIncident(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.IncidenModel.updateOne({ _id: id }, { status: "Acknowledged" });
            return this.getIncident(id);
        });
    }
    resolveIncident(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.IncidenModel.updateOne({ _id: id }, { status: "Resolved" });
            return this.getIncident(id);
        });
    }
    assigneIncident(id, assignee) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.IncidenModel.updateOne({ _id: id }, { assignee });
            return this.getIncident(id);
        });
    }
}
IncidentService.availableStatuses = ["Created", "Acknowledged", "Resolved"];
exports.default = IncidentService;
//# sourceMappingURL=IncidentService.js.map