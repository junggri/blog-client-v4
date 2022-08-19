import Document, {Head, Html, Main, NextScript} from "next/document";
import React from 'react';

class MyDocument extends Document {

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/*<link rel="icon" href="https://www.junggri.com/images/Logo.ico"/>*/}
          {/*변경*/}
          <meta charSet="utf-8"/>
          <meta name="keywords" content="정그리, junggri"/>
          <script
            data-ad-client="ca-pub-6475394953521607"
            async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
          </script>
          {/*변경*/}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-186554267-1"/>
          {/*변경*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag("js", new Date());
                        gtag("config", "UA-186554267-1");
                        `,
            }}
          />
          {/*변경*/}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
