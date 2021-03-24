import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import HeroBar from './HeroBar';
import Container from "../utility/Container";

const Hero = () => {
  return (
    <>
      <section id="Hero" className={styles.hero}>
        <Container>
        <div className={styles.heroText}>
          <h1>Set your sights on success.</h1>
          <h5>
            Everyone has the capacity for excellence and Euler is a place to
            unlock a student's true potential. <br />
            Private, 1–on–1 lessons for your child with an expert instructor
            from a top school. Meet online or in-person. Decide who you want to
            work with and get better instruction for future success.
          </h5>
          <div className={styles.buttonsContainer}>
            <button className={styles.contactButton}>Contact</button>
            <button aria-label="more info" className={styles.infoButton}>
              More Info
              <div className={styles.arrowIcon}>
                <Image
                  src="/arrow-right.svg"
                  height={30}
                  width={30}
                  alt="arrow pointing right"
                />
              </div>
            </button>
          </div>
        </div>
        </Container>
      </section>

      <HeroBar />
    </>
  );
};

export default Hero;
