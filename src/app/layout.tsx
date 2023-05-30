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
        <meta charSet="utf-8" />
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
