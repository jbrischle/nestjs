import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
          />{' '}
          <link
            href="/icon/memory-game-256.png"
            rel="apple-touch-icon"
            sizes="256x256"
          />{' '}
          <meta
            name="theme-color"
            content="#fff"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
