import React from 'react';
import Image from 'next/image';

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
      <Image
        priority={true}
        width={100}
        height={100}
        src={back}
        alt="pokemon"
      />
    );
  } else {
    return (
      <Image
        loading={'lazy'}
        width={100}
        height={100}
        src={front}
        alt="pokemon"
      />
    );
  }
}
