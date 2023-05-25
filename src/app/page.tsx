import React from 'react';
import Board from '@/components/board/board';

function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function getRandomPokemonIds() {
  const number = new Set<string>();

  while (number.size < 12) {
    const min = Math.ceil(1);
    const max = Math.floor(649);
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    number.add(num.toString());
  }

  return [...Array.from(number), ...Array.from(number)];
}

export default function Home() {
  const list = shuffle(getRandomPokemonIds());

  return <Board list={list}></Board>;
}
