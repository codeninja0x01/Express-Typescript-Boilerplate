import { ApolloServer } from 'apollo-server-express';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import * as path from 'path';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

import { env } from '../env';

export const graphqlLoader: MicroframeworkLoader = async (
    settings: MicroframeworkSettings | undefined
) => {
    if (settings && env.graphql.enabled) {
        const expressApp = settings.getData('express_app');

        const schema = await buildSchema({
            resolvers: env.app.dirs.resolvers,
            container: Container,
            validate: false,
            // automatically create `schema.gql` file with schema definition in current folder
            emitSchemaFile: path.resolve(__dirname, '../api', 'schema.gql'),
        });

        const server = new ApolloServer({
            schema,
            playground: env.graphql.editor,
        });

        // Add graphql layer to the express app
        server.applyMiddleware({ app: expressApp, path: env.graphql.route });
    }
};
