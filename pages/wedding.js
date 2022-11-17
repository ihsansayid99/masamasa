import Head from 'next/head'
import { Wedding } from "../contents/wedding";

export default function WeddingPage() {
  return (
    <>
      <Head>
        <title>MasaMasa Photography | Wedding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wedding />
    </>
  );
}
