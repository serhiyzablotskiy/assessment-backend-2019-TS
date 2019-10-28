"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResolversBuilder {
    constructor(schema, api) {
        this.buildResolver = (resolvers, field) => {
            if (!field) {
                throw new Error("ResolversBuilder: wrong definition in schema");
            }
            const { value: apiOperationName } = field.name || {};
            const Operation = this.api[apiOperationName];
            if (!Operation) {
                throw new Error(`ResolversBuilder: api does not have a resolver for ${apiOperationName}`);
            }
            resolvers[apiOperationName] = (_, args) => {
                const operation = new Operation(args);
                return operation.execute();
            };
            return resolvers;
        };
        this.schema = schema;
        this.api = api;
        if (!schema) {
            throw new Error("ResolversBuilder: schema is not provided");
        }
        if (!api) {
            throw new Error("ResolversBuilder: api is not provided");
        }
    }
    buildResolvers() {
        return ResolversBuilder.operationTypes.reduce((memo, operationType) => {
            memo[operationType] = this.buildOperationResolvers(operationType);
            return memo;
        }, {
            Mutation: {},
            Query: {}
        });
    }
    buildOperationResolvers(operationType) {
        const { definitions = [] } = this.schema;
        const operationDefinition = definitions.find((definition) => {
            const { name: definitionName = {} } = definition || {};
            return definitionName.value === operationType;
        });
        if (!operationDefinition) {
            throw new Error(`ResolversBuilder: schema does not contain resolvers for ${operationType}`);
        }
        const { fields = [] } = operationDefinition;
        return fields.reduce(this.buildResolver, {});
    }
}
ResolversBuilder.operationTypes = ["Query", "Mutation"];
exports.default = ResolversBuilder;
//# sourceMappingURL=ResolversBuilder.js.map