import React from 'react';
import styles from './InfoRow.module.css';
import Image from 'next/image';
import InfoBox from './InfoBox';
import Container from '../utility/Container';

let textExample =
  'Learn from expert educators from schools such as Harvard, Princeton, Cornell, and MIT';

const InfoRow = () => {
  return (
    <Container>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <div className={styles.iconContainer}>
            <div className={styles.graduationIcon}>
              <Image
                src="/graduation-icon.png"
                alt="book"
                height={50}
                width={50}
              />
            </div>
          </div>
          <div className={styles.infoText}>
            <p>{textExample}</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.iconContainer}>
            <div className={styles.bookIcon}>
              <Image src="/book-icon.png" alt="book" height={50} width={50} />
            </div>
          </div>
          <div className={styles.infoText}>
            <p>{textExample}</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.iconContainer}>
            <div className={styles.awardIcon}>
              <Image src="/award-icon.png" alt="book" height={55} width={40} />
            </div>
          </div>
          <div className={styles.infoText}>
            <p>{textExample}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InfoRow;
