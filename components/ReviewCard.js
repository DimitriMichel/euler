import React from 'react';
import styles from './ReviewCard.module.css';
import { FaStar } from 'react-icons/fa';
const ReviewCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.reviewerImage}></div>
      <p className={styles.reviewerComment}>
        "An absolutely amazing service that has given us access to the best
        instructors in the world!"
      </p>
      <div className={styles.reviewStars}>
        <div className={styles.star}>
          <FaStar size={25} color="#fcd50e" />
        </div>
        <div className={styles.star}>
          <FaStar size={25} color="#fcd50e" />
        </div>
        <div className={styles.star}>
          <FaStar size={25} color="#fcd50e" />
        </div>
        <div className={styles.star}>
          <FaStar size={25} color="#fcd50e" />
        </div>
        <div className={styles.star}>
          <FaStar size={25} color="#fcd50e" />
        </div>
      </div>
      <div className={styles.reviewerName}>Daniel O.</div>
      <div className={styles.reviewerRole}>Parent</div>
    </div>
  );
};

export default ReviewCard;
