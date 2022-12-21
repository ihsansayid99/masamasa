import Head from 'next/head'
import { Portrait } from "../contents/portrait";
import data from "../utils/wedding.json";

function WeddingPage({portrait}) {
  return (
    <>
      <Head>
        <title>MasaMasa Photography | Portrait</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Portrait data={portrait} />
    </>
  );
}

WeddingPage.getInitialProps = async (ctx) => {
  const res = await data
  return {
    portrait: res
  }
}

export default WeddingPage;
