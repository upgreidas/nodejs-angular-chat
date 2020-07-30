import { Express } from 'express';
import * as bodyParser from 'body-parser';
import { AuthController } from './app/controllers/auth.controller';

export const registerMiddleware = (app: Express) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

export const registerRoutes = (app: Express) => {

  app.use('/auth', new AuthController().routes());

};