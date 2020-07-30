import { Express } from 'express';
import * as bodyParser from 'body-parser';

export const registerMiddleware = (app: Express) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

export const registerRoutes = (app: Express) => {
  
};