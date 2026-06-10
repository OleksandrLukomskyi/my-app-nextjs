import { getAllArticles } from './(server)/api';

export default async function Home() {
  const allArticles = await getAllArticles();
  return (
    <>
      <h1> Drag blog</h1>
      <ul>
        {allArticles.map((article) => (
          <li key={article.name}>{article.header}</li>
        ))}
      </ul>
    </>
  );
}
