import {
    Collection,
    Db,
    Document,
    Filter,
    FindOptions,
    OptionalId
} from 'mongodb';
import Boom from '@hapi/boom';
import { ObjectId } from 'mongodb';

type Record = OptionalId<Document> | null;

export const connect = (db: Db, _collectionName: string) => {
    const collection = db.collection(_collectionName);

    return class ActiveRecord {
        record: Record;
        collection: Collection<Document>;
        db: Db;

        static async findOne(
            query: Filter<Document>,
            options: FindOptions<Document> = {}
        ) {
            let record: OptionalId<Document> | null;
            try {
                record = await collection.findOne(query, options);
            } catch (e) {
                throw Boom.internal('Mongo DB err', e);
            }
            return record ? new this(record) : null;
        }

        static async findById(_id: ObjectId, options: FindOptions<Document>) {
            return ActiveRecord.findOne({ _id }, options);
        }

        async save(options = {}) {
            if (!this.record) {
                throw new Error('No record available');
            }
            try {
                return collection.updateOne(
                    {
                        _id: new ObjectId(this.record._id)
                    },
                    {
                        $set: this.record
                    },
                    options
                );
            } catch (err) {
                throw Boom.internal('Internal mongo db err', err);
            }
        }

        async create(options = {}) {
            if (!this.record) {
                throw new Error('No record available');
            }
            try {
                collection.insertOne(this.record);
            } catch (e) {
                throw Boom.internal('Internal mongo db err', e);
            }
        }

        async upsert() {
            return this.save({ upsert: true });
        }
        constructor(record: Record) {
            this.db = db;
            this.collection = collection;
            this.record = record || null;
        }
    };
};
