import Head from 'next/head'
import { Portrait } from "../contents/portrait";

export default function WeddingPage() {
  return (
    <>
      <Head>
        <title>MasaMasa Photography | Portrait</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Portrait />
    </>
  );
}
