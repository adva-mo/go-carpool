import Head from "next/head";
import SocketProvider from "../providers/SocketProvider";
import TripProvider from "../providers/TripProvider";
import LocationProvider from "../providers/LocationProvider";

export default function Home() {
  return (
    <>
      <Head>
        <title>GO - carpool</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LocationProvider>
        <SocketProvider>
          <TripProvider />
        </SocketProvider>
      </LocationProvider>
    </>
  );
}
