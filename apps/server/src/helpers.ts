import { resolve } from 'path';
import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

/**
 * Join all arguments together and normalize the resulting path.
 * Arguments must be relative to root directory of application.
 */
export const rootDir = (...paths: string[]): string => {
  return resolve(__dirname, ...paths);
};

/**
 * Input validation response middleware.
 */
export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(422).json(errors);
}