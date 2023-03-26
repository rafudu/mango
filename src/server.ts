'use strict';

import Hapi from '@hapi/hapi';

import registerMongoIntoServer from './db/registerMongoIntoServer';
import RequestWithMongoDB from './lib/types/RequestWithMongo';
const {DEV_PORT} = process.env;

const init = async function () {
    const server = Hapi.server({
        port: DEV_PORT || 9999,
        host: '0.0.0.0'
    });
    await registerMongoIntoServer(server)

    server.route({
        path: "/",
        method: "GET",
        handler: (r) => {
            return {status: "success, you are running hapi"}
        }
    })
    
    server.route({
        path: "/mongo",
        method: "GET",
        handler: (req: Hapi.Request<Hapi.ReqRefDefaults> & RequestWithMongoDB) => {
            if (req.mongo.client && req.mongo.db){

                return {status: "success, you are running mongodb"}
            }
        }
    })
    console.log(`Server started at ${server.info.uri}`);
    return await server.start();
};

init().catch((err) => {
    console.error(err);
    process.exit(1);
});
