import React from "react";
import Image from "next/image";
import styles from './HeroBar.module.css'
const HeroBar = () => {
  return (
    <div className={styles.bar}>
      <Image src='/the-university-of-sydney-3.svg' height={45} width={220} alt='University of Sydney logo'/>
      <Image src='/the-university-of-chicago.svg' height={40} width={200} alt='University of Chicago logo'/>
      <Image src='/the-university-of-sydney-3.svg' height={45} width={220} alt='University of Sydney logo'/>
      <Image src='/the-university-of-chicago.svg' height={40} width={200} alt='University of Chicago logo'/>
    </div>
  );
};

export default HeroBar;