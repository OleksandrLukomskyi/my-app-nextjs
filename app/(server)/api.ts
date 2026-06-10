import { ERRORS } from '../errors';
import articles from './db.json';
import { delayed } from './delay';

export function getAllArticles() {
  return delayed(new Error(ERRORS.NOT_FOUND), { timeout: 1500, shouldFail: true });
}
