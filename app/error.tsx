'use client';
export default function HomePageError({ error }) {
  if (error.message === ERRORS.NOT_FOUND) return <>{error.message}</>;
}
