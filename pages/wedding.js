import Head from 'next/head'
import { Wedding } from "../contents/wedding";
import data from "../utils/wedding.json";

function WeddingPage({wedding}) {
  return (
    <>
      <Head>
        <title>MasaMasa Photography | Wedding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wedding data={wedding} />
    </>
  );
}

WeddingPage.getInitialProps = async (ctx) => {
  const res = await data;
  return {
    wedding: res
  }
}

export default WeddingPage;