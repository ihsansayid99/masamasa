import Head from 'next/head'
import { Hero, Collection, Service } from "../contents/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>MasaMasa Photography | Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Collection />
      <Service />
    </>
  );
}
