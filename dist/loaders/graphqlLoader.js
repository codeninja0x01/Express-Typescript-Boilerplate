"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
const path = tslib_1.__importStar(require("path"));
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const env_1 = require("../env");
exports.graphqlLoader = (settings) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    if (settings && env_1.env.graphql.enabled) {
        const expressApp = settings.getData('express_app');
        const schema = yield type_graphql_1.buildSchema({
            resolvers: env_1.env.app.dirs.resolvers,
            container: typedi_1.Container,
            validate: false,
            // automatically create `schema.gql` file with schema definition in current folder
            emitSchemaFile: path.resolve(__dirname, '../api', 'schema.gql'),
        });
        const server = new apollo_server_express_1.ApolloServer({
            schema,
            playground: env_1.env.graphql.editor,
        });
        // Add graphql layer to the express app
        server.applyMiddleware({ app: expressApp, path: env_1.env.graphql.route });
    }
});
//# sourceMappingURL=graphqlLoader.js.map