import { Express } from 'express';
import { Server } from 'http';
import * as bodyParser from 'body-parser';
import * as io from 'socket.io';

import { AuthController } from './app/controllers/auth.controller';
import authenticationMiddleware from './app/middleware/authentication.middleware';
import AuthenticationService from './app/services/authentication.service';
import { HttpError } from './app/http-error';
import UserService from './app/services/user.service';

let wss: io.Server;

export const registerMiddleware = (app: Express) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(authenticationMiddleware);
};

export const registerRoutes = (app: Express) => {

  app.use('/api/auth', new AuthController().routes());

};

export const registerErrorHandler = (app: Express) => {
  app.use((error, req, res, next) => {
    res.status(error.code).json({ message: error.message, code: error.code });
  });
};

export const startWebSocketServer = (server: Server) => {
  wss = io(server);
  
  wss.use((socket: io.Socket, next) => {
    const token = socket.handshake.query.token;
    
    const payload = AuthenticationService.decodeToken(token);
    
    if(!payload) {
      return next(new HttpError('Authentication error', 401));
    }

    const user = UserService.findUserByID(payload['id']);
    
    if(!user) {
      return next(new HttpError('Authentication error', 401));
    }

    return next();
  });
  
  wss.on('connect', (socket) => {
    console.log('connect');

    socket.on('message', (e) => {
      console.log(e);
    })
  });
};