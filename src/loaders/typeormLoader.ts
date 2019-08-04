import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { createConnection, getConnectionOptions } from 'typeorm';

export const typeormLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {

    const loadedConnectionOptions = await getConnectionOptions();

    const connectionOptions = Object.assign(loadedConnectionOptions, {
        cache: {
            type: 'redis',
            duration: 600000,
            options: {
                host: 'localhost',
                port: 6379,
                password: 'f4fKYAkuZ+/+gtLQXRFZm+2d41BesKkeqhgNestIzCn+6jyuiNKxJtrMTXuXjXhuHK51T00ZvJB5fJdv',
            },
        },
    });

    const connection = await createConnection(connectionOptions);

    if (settings) {
        settings.setData('connection', connection);
        settings.onShutdown(() => connection.close());
    }
};
