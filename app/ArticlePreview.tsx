'use client';
import { useState } from 'react';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';

type ArticlePreviewProps = {
  name: string;
  text: string;
};

export function ArticlePreview({ name, text }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>
      <button onClick={() => setLiked(true)} type="button">
        {liked ? '👍' : 'Like'}
      </button>
    </>
  );
}
