import Head from "next/head";

import TripProvider from "../components/TripProvider";

export default function Home() {
  return (
    <>
      <Head>
        <title>GO - carpool</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TripProvider />
    </>
  );
}