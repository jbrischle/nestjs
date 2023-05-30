'use client';
import styles from './board.module.scss';
import { Card } from '@/components/card/card';
import React, { useEffect } from 'react';

export default function Board({ list }: { list: string[] }) {
  const [currentTurn, setCurrentTurn] = React.useState(
    {} as Record<number, string>
  );
  const [revealedPairs, setRevealedPairs] = React.useState(
    {} as Record<number, string>
  );

  useEffect(() => {
    function checkIfIsPair(local: { [p: number]: string }): void {
      const [first, second] = Object.values(local);

      if (first === second) {
        setRevealedPairs({ ...revealedPairs, ...local });
      }
    }

    checkIfIsPair(currentTurn);
  }, [currentTurn]);

  function onClick(entry: string, index: number) {
    const local = { ...currentTurn };

    if (Object.keys(local).length >= 2) {
      setCurrentTurn({ [index]: entry });
    } else {
      local[index] = entry;
      setCurrentTurn(local);
    }
  }

  function shouldShowBack(index: number) {
    return (
      !Object.keys(currentTurn).includes(index.toString()) &&
      !Object.keys(revealedPairs).includes(index.toString())
    );
  }

  function isRevealed(index: number) {
    return Object.keys(revealedPairs).includes(index.toString());
  }

  return (
    <div className={styles.grid}>
      {list.map((entry, index) => (
        <div
          key={index}
          onClick={(event) => onClick(entry, index)}
          className={isRevealed(index) ? styles.card__revealed : styles.card}
        >
          <Card
            id={entry}
            showBack={shouldShowBack(index)}
          ></Card>
        </div>
      ))}
    </div>
  );
}
