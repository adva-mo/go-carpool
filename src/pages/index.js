import Head from "next/head";
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from "@/styles/Home.module.css";
import useLocation from "@/hooks/use-location";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { currentPosition } = useLocation();
  return (
    <>
      <Head>
        <title>GO - carpool</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
