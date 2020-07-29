import { createConnection, Connection, ConnectionOptions, getManager, getRepository } from 'typeorm';

class DatabaseService {

  static connection: Connection;

  static connect(options: ConnectionOptions) {
    const promise = createConnection(options);

    promise.then(connection => DatabaseService.connection = connection);

    return promise;
  }

  static getRepository(entity: any) {
    return getRepository(entity);
  }

}

export default DatabaseService;