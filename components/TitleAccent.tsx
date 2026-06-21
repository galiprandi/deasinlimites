import React from "react";

interface TitleAccentProps {
  text: string;
}

/**
 * Componente para unificar el estilo de acento cromático en títulos.
 * Envuelve automáticamente la última palabra en un <span> para aplicar el color de acento.
 */
export default function TitleAccent({ text }: TitleAccentProps) {
  if (!text) return null;

  const words = text.trim().split(/\s+/);

  if (words.length <= 1) {
    return <span>{text}</span>;
  }

  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <>
      {firstPart} <span>{lastWord}</span>
    </>
  );
}
