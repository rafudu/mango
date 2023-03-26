import Hapi from '@hapi/hapi';
import Mongo, { MongoClient, Db, ObjectId } from 'mongodb';

type RequestWithMongoDB = {
    mongo: {
        client: MongoClient;
        db: typeof Db | (typeof Db)[];
        lib: typeof Mongo;
        ObjectID: typeof ObjectId;
    };
} & Hapi.Request<Hapi.ReqRefDefaults>;

export default RequestWithMongoDB;
