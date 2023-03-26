import * as HelloController from './';

export default [
    {
        method: 'GET',
        path: '/',
        options: {},
        handler: HelloController.index
    },
    {
        method: 'GET',
        path: '/mongo',
        options: {},
        handler: HelloController.mongo
    }
];
