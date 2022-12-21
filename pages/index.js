import Head from 'next/head'
import { Hero, Collection, Service } from "../contents/home";
import heroImage from "../public/images/HERO-IMAGE.jpg";
import preWedding from "../public/images/masamasa-prewedding.jpg";
import portrait from "../public/images/masamasa-portrait.jpg";
import wedding from "../public/images/masamasa-wedding.jpg";

export default function Home({heroImage, portrait, preWed, wed}) {
  return (
    <>
      <Head>
        <title>MasaMasa Photography | Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero heroImage={heroImage} />
      <Collection portrait={portrait} preWedding={preWed} wedding={wed} />
      <Service />
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { heroImage: heroImage, preWed: preWedding, wed: wedding, portrait: portrait }
  }
}