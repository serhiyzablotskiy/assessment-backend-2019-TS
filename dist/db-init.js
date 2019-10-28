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
const models_1 = require("./models");
function seedUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        yield models_1.User.deleteMany({});
        const user1 = new models_1.User({
            email: "john.doe@example.com",
            name: "John Doe",
            role: "Engineer"
        });
        const user2 = new models_1.User({
            email: "jane.doe@example.com",
            name: "Jane Doe",
            role: "Supervisor"
        });
        yield user1.save();
        yield user2.save();
        console.log("INFO: User DB seeded");
    });
}
exports.seedUsers = seedUsers;
//# sourceMappingURL=db-init.js.map