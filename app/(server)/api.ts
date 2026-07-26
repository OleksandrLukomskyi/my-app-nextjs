import { ERRORS } from '../errors';
import articles from './db.json';
import { delayed } from './delay';

export function getAllArticles() {
  return delayed(articles);
}

export function getArticleByName(articleName: string) {
  const article = articles.find((article) => article.name === articleName);

  if (!article) {
    throw new Error(ERRORS.NOT_FOUND);
  }
  return delayed(article);
}
