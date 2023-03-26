'use strict';

import MangoRequestHandler from '../../lib/types/MangoController';

export const index: MangoRequestHandler = async (request) => {
    return ['Success! you are running Mango'];
};

export const mongo: MangoRequestHandler = async (request) => {
    if (request.mongo) {
        return ['Success! you are running Mango With MongoDB'];
    }
};
