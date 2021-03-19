import Head from 'next/head';
import styles from './index.module.css';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import InfoRow from '../components/InfoRow';
import Reviews from '../components/Reviews';
import Container from '../utility/Container';
import StudentVoices from '../components/StudentVoices';
import RegistrationBanner from "../components/RegistrationBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Euler - Tutoring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Hero />
      <div>
        <WhatWeDo />
        <InfoRow />
        <Reviews />
        <StudentVoices />
        <RegistrationBanner/>
      </div>
    </>
  );
}
