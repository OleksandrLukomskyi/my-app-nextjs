"use client";

type LessonProps = {
  title: string;
  shortSummary?: string;
};

type LikeState = "unset" | "Liked" | "Disliked";
export default function Lesson({ title, shortSummary }: LessonProps) {
  return (
    <details>
      <summary>
        <h2>{title}</h2>
      </summary>

      <p>{shortSummary}</p>
    </details>
  );
}
