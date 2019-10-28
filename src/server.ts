import { ApolloServer } from "apollo-server-express";
import config from "config";
import express, { Application as ExpressApplication } from "express";
import mongoose from "mongoose";
import { seedUsers } from "./db-init";
import { schema } from "./graphql";

mongoose.Promise = global.Promise;

mongoose.connect(config.get("db.uri"), { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("INFO: Connected to the database");

    await seedUsers();

    const server = new ApolloServer({ schema });

    const app: ExpressApplication = express();
    server.applyMiddleware({ app });

    const host: string = config.get("server.host");
    const port: number = config.get("server.port");

    app.listen({ port }, () => {
      console.log(`Server ready at http://${ host }:${ port }${ server.graphqlPath }`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(-1);
  });
