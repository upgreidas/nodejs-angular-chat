import * as express from 'express';
import * as routes from './routes';

import DB from './app/services/database.service';
import { rootDir } from './helpers';
import { User, UserRole } from './app/entities/user.entity';

const app = express();
routes.register(app);

const port = process.env.APP_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);

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