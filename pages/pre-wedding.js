import Head from 'next/head'
import { PreWedding } from "../contents/pre-wedding";
import data from "../utils/wedding.json";

function WeddingPage({wedding}) {
  return (
    <>
      <Head>
        <title>MasaMasa Photography | Pre Wedding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PreWedding data={wedding} />
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