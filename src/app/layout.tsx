import './globals.scss';
import { Inter } from 'next/font/google';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Memory',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Memory Game</title>
        <meta
          name="Memory Game"
          content="Play memory with pokemons."
        />
        <link
          rel="manifest"
          href="/manifest.json"
        />
        <link
          href="/icon/memory-game-512.png"
          rel="icon"
          type="image/x-icon"
        />
        <link
          href="/icon/memory-game-512.png"
          rel="apple-touch-icon"
        />
        <link
          href="/icon/memory-game-128.png"
          rel="apple-touch-icon"
          sizes="128x128"
        />
        <link
          href="/icon/memory-game-256.png"
          rel="apple-touch-icon"
          sizes="256x256"
        />
        <meta
          name="theme-color"
          content="#fff"
        />
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
