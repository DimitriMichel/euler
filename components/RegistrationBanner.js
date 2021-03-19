import React from 'react';
import Container from '../utility/Container';
import styles from './RegistrationBanner.module.css';
const RegistrationBanner = () => {
  return (
    <Container>
      <div className={styles.bannerContainer}>
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h2>Ready to Join?</h2>
            <p>
              Register for your sessions with our amazing tutors with a click of
              a button and you'll have a preliminary meeting about your needs.
            </p>
          </div>
          <div className={styles.btn__container}>
            <button className={styles.btn__text}>Register Now</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegistrationBanner;
