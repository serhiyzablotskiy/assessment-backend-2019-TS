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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const config_1 = __importDefault(require("config"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_init_1 = require("./db-init");
const graphql_1 = require("./graphql");
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(config_1.default.get("db.uri"), { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("INFO: Connected to the database");
    yield db_init_1.seedUsers();
    const server = new apollo_server_express_1.ApolloServer({ schema: graphql_1.schema });
    const app = express_1.default();
    server.applyMiddleware({ app });
    const host = config_1.default.get("server.host");
    const port = config_1.default.get("server.port");
    app.listen({ port }, () => {
        console.log(`Server ready at http://${host}:${port}${server.graphqlPath}`);
    });
}))
    .catch((error) => {
    console.error(error);
    process.exit(-1);
});
//# sourceMappingURL=server.js.map