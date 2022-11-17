import Head from 'next/head'
import { PreWedding } from "../contents/pre-wedding";

export default function WeddingPage() {
  return (
    <>
      <Head>
        <title>MasaMasa Photography | Pre Wedding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PreWedding />
    </>
  );
}
