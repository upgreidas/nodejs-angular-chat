import * as express from 'express';
import * as http from 'http';

import DB from './app/services/database.service';

import { rootDir } from './helpers';
import { User } from './app/entities/user.entity';
import { registerRoutes, registerMiddleware, startWebSocketServer, registerErrorHandler } from './bootstrap';

const app = express();
const server = http.createServer(app);

registerMiddleware(app);
registerRoutes(app);
registerErrorHandler(app);
startWebSocketServer(server);

const port = process.env.APP_PORT || 3333;

server.listen(port);

server.on('error', console.error);

console.log(`Listening at http://localhost:${port}`);

DB.connect({
  type: 'sqlite',
  database: rootDir(process.env.DB_FILE || 'database.sqlite'),
  synchronize: Boolean(process.env.DB_SYNC) || true,
  entities: [
    User,
  ]
})
.then(connection => console.log(`Database connection established`))
.catch(error => console.log(error));