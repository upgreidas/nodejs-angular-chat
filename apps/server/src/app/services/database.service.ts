import { createConnection, Connection, ConnectionOptions } from 'typeorm';

class DatabaseService {

  static connection: Connection;

  static connect(options: ConnectionOptions) {
    const promise = createConnection(options);

    promise.then(connection => DatabaseService.connection = connection);

    return promise;
  }

}

export default DatabaseService;