import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Roboto:wght@400;700&family=ZCOOL+QingKe+HuangYou&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/assets/favicon.png"
            type="image/png"
          />
          <meta
            name="description"
            content="Thiago Cabral | Desenvolvedor Web"
          />
          <meta name="keywords" content="Portfólio, Programação" />
          <meta name="author" content="Thiago Cabral" />
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}
