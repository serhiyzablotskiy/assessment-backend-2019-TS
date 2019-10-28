"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    static isIdValid(id) {
        return mongoose_1.Types.ObjectId.isValid(id);
    }
    getEngineer() {
        return this.UserModel.findOne({ role: "Engineer" });
    }
    getUser(id) {
        return this.UserModel.findOne({ _id: id });
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map