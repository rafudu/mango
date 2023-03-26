'use strict';
import { Server } from '@hapi/hapi';
import mongoConfig from './options';

export default async (server: Server) =>
    await server.register({
        plugin: require('hapi-mongodb'),
        options: mongoConfig
    });
