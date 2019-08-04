import { env } from './src/env';

export = {
    type: env.db.type, // See createConnection options for valid types
    host: env.db.host,
    port: env.db.port,
    username: env.db.username,
    password: env.db.password,
    database: env.db.database,
    synchronize: env.db.synchronize,
    logging: env.db.logging,
    entities: env.app.dirs.entities,
    migrations: env.app.dirs.migrations,
    cache: {
        type: 'database',
        tableName: 'configurable-table-query-result-cache',
    },
};
