import Mongo, { MongoClient, Db, ObjectId } from "mongodb";

type RequestWithMongoDB = {
    mongo: {
    client: MongoClient,
    db: typeof Db | typeof Db[],
    lib: typeof Mongo,
    ObjectID: typeof ObjectId
    }
}

export default RequestWithMongoDB