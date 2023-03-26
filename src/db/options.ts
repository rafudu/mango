'use strict';

const { DB_PASSWORD, DB_USER, DB_URL, MONGO_CONTAINER, DB_PORT } = process.env;
const [DEFAULT_PORT, DEFAULT_URL] = ['27017', 'localhost']
const URL = MONGO_CONTAINER || DB_URL || DEFAULT_URL
const PORT = DB_PORT || DEFAULT_PORT

export default {
    url: `mongodb://${URL}:${PORT}`,

    settings: {
        // poolSize: 10,
        // useUnifiedTopology: true,
        // auth: {
            user: DB_USER,
            password: DB_PASSWORD
        // }
    },
    decorate: true
};
