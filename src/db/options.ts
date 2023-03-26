'use strict';

import { MongoClientOptions } from 'mongodb';

const { DB_PASSWORD, DB_USER, DB_URL, MONGO_CONTAINER, DB_PORT } = process.env;
const [DEFAULT_PORT, DEFAULT_URL] = ['27017', 'localhost'];
const URL = MONGO_CONTAINER || DB_URL || DEFAULT_URL;
const PORT = DB_PORT || DEFAULT_PORT;

const settings: MongoClientOptions = {
    auth: {
        username: DB_USER,
        password: DB_PASSWORD
    }
};

export default {
    url: `mongodb://${URL}:${PORT}`,
    settings,
    decorate: true
};
