'use client';
import { useEffect, useState } from 'react';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';

type ArticlePreviewProps = {
  name: string;
  text: string;
};

const getLikeKey = (articleName: string) => `drag_blog_1_like_${articleName}`;
export function ArticlePreview({ name, text }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likeKey = getLikeKey(name);
    const likeValue = localStorage.getItem(likeKey);
    setLiked(likeValue === 'liked');
  }, [name]);

  const like = () => {
    const likeKey = getLikeKey(name);
    localStorage.setItem(likeKey, 'liked');
    setLiked(true);
  };
  return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>
      <button onClick={like} type="button">
        {liked ? '👍' : 'Like'}
      </button>
    </>
  );
}
