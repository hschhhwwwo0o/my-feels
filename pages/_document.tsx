import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import ConnectFonts from "components/Head/ConnectFonts";
import Meta from "components/Head/Meta";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <ConnectFonts />
          <Meta />
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
