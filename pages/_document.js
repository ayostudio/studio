import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import '../globalStyles';

class CustomDocument extends Document {
  static getInitialProps({ renderPage, res, req }) {
    const sheet = new ServerStyleSheet();
    const route = req.url;
    const statusCode = res.statusCode > 200 ? res.statusCode : false;
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return {
      ...page,
      styleTags,
      statusCode,
      route,
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="google-site-verification" content="9EQDyB1CvC_av-AyUJLYN6O3wc0YoYo4PGBbjcXC16M" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
