import { resolve } from 'path';

/**
 * Join all arguments together and normalize the resulting path.
 * Arguments must be relative to root directory of application.
 */
export const rootDir = (...paths: string[]): string => {
  return resolve(__dirname, ...paths);
};