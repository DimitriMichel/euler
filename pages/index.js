import Head from 'next/head';
import styles from './index.module.css';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import InfoRow from "../components/InfoRow";

export default function Home() {
  return (
    <>
      <Head>
        <title>Galilei - Tutoring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navigation />
        <Hero />
        <div className={styles.siteContainer}>
          <WhatWeDo />
          <InfoRow/>
        </div>
      </div>
    </>
  );
}
