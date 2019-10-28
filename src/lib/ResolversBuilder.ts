import { DocumentNode } from "graphql";
import { IResolvers, ITypeDefinitions } from "graphql-tools";
import ApiOperation from "./ApiOperation";

class ResolversBuilder {
  public static operationTypes: string[] = ["Query", "Mutation"];
  private schema: DocumentNode;
  private api: any;

  constructor(schema: DocumentNode, api: any) {
    this.schema = schema;
    this.api = api;

    if (!schema) { throw new Error("ResolversBuilder: schema is not provided"); }
    if (!api) { throw new Error("ResolversBuilder: api is not provided"); }
  }

  public buildResolvers(): IResolvers<any, any> {
    return ResolversBuilder.operationTypes.reduce((memo: IResolvers, operationType: string) => {
      memo[operationType] = this.buildOperationResolvers(operationType);
      return memo;
    }, {
      Mutation: {},
      Query: {}
    });
  }

  private buildOperationResolvers(operationType: string) {
    const { definitions = [] } = this.schema;

    const operationDefinition: any = definitions.find((definition: any) => {
      const { name: definitionName = {} } = definition || {};
      return definitionName.value === operationType;
    });

    if (!operationDefinition) { throw new Error(`ResolversBuilder: schema does not contain resolvers for ${operationType}`); }

    const { fields = [] } = operationDefinition;
    return fields.reduce(this.buildResolver, {});
  }

  private buildResolver = (resolvers: any, field: any) => {
    if (!field) { throw new Error("ResolversBuilder: wrong definition in schema"); }

    const { value: apiOperationName } = field.name || {};
    const Operation = this.api[apiOperationName];

    if (!Operation) {
      throw new Error(`ResolversBuilder: api does not have a resolver for ${apiOperationName}`);
    }

    resolvers[apiOperationName] = (_: void, args: any) => {
      const operation = new Operation(args);
      return operation.execute();
    };

    return resolvers;
  }
}

export default ResolversBuilder;
