import { ERRORS } from '../errors';
import articles from './db.json';
import { delayed } from './delay';

export function getAllArticles() {
  return delayed(articles);
}
