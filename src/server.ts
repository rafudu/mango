'use strict';

import Hapi from '@hapi/hapi';

import registerMongoIntoServer from './db/registerMongoIntoServer';
import RequestWithMongoDB from './lib/types/RequestWithMongo';
import Routes from './routes';

const { DEV_PORT } = process.env;

const init = async function () {
    const server = Hapi.server({
        port: DEV_PORT || 9999,
        host: '0.0.0.0'
    });
    await registerMongoIntoServer(server);

    server.route(Routes);
    console.log(`Server started at ${server.info.uri}`);
    return await server.start();
};

init().catch((err) => {
    console.error(err);
    process.exit(1);
});
