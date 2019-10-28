"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const IncidentSchema = new mongoose_1.Schema({
    assignee: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["Created", "Acknowledged", "Resolved"] },
    title: { required: true, type: String }
}, { timestamps: true });
const Incident = mongoose_1.model("Incident", IncidentSchema);
exports.default = Incident;
//# sourceMappingURL=Incident.js.map