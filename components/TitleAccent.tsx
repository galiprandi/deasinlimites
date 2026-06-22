import React from "react";

interface TitleAccentProps {
  text: string;
}

/**
 * TitleAccent Component
 * Splits the input text and wraps the last word in a <span> for chromatic accenting.
 */
const TitleAccent: React.FC<TitleAccentProps> = ({ text }) => {
  const words = text.trim().split(/\s+/);

  if (words.length <= 1) {
    return <span>{text}</span>;
  }

  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <>
      {firstPart}{" "}
      <span>{lastWord}</span>
    </>
  );
};

export default TitleAccent;
