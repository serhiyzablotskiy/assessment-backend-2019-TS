import api from "../api";
import { ResolversBuilder } from "../lib";
import * as schema from "./schema.graphql";

const resolversBuilder = new ResolversBuilder(schema, api);
export default resolversBuilder.buildResolvers();
