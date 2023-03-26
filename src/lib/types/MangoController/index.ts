import RequestWithMongoDB from '../RequestWithMongo';

type MangoRequestHandler = (req: RequestWithMongoDB, ...any: any[]) => any;

export default MangoRequestHandler;
