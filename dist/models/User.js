"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true, enum: ["Engineer", "Supervisor"] }
}, { timestamps: true });
const User = mongoose_1.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=User.js.map