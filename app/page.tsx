import { getAllArticles } from './(server)/api';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';

export default async function Home() {
  const allArticles = await getAllArticles();
  return (
    <>
      <h1> Drag blog</h1>
      <ul>
        {allArticles.map((article) => (
          <li key={article.name}>
            <AppLink href={ROUTING.article(article.name)}>
              {article.name}
            </AppLink>
          </li>
        ))}
      </ul>
    </>
  );
}
