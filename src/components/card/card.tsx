import React from 'react';

export function Card({
  id,
  showBack = true,
}: {
  id: string;
  showBack: boolean;
}) {
  const front = `/pokemon/${id}.png`;
  const back = `/pokemon/egg.png`;

  if (showBack) {
    return (
      <img
        src={back}
        alt="pokemon-egg"
      />
    );
  } else {
    return (
      <img
        src={front}
        alt="pokemon"
      />
    );
  }
}
