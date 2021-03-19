import React from 'react';
import styles from './ReviewCard.module.css';
import { RiStarSFill } from 'react-icons/ri';
const ReviewCardMini = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.fractionScore}>4.9/5</div>
      <div className={styles.reviewStars}>
        <div className={styles.star}>
          <RiStarSFill size={25} color="#fcd50e" />
        </div>
        <div className={styles.star}>
          <RiStarSFill size={25} color="#fcd50e" />
        </div>
        <div className={styles.star}>
          <RiStarSFill size={25} color="#fcd50e" />
        </div>
        <div className={styles.star}>
          <RiStarSFill size={25} color="#fcd50e" />
        </div>
        <div className={styles.star}>
          <RiStarSFill size={25} color="#fcd50e" />
        </div>
      </div>
      <div className={styles.reviewerComment}>
        " by 1000 students over 9000 hours of instruction"
      </div>
    </div>
  );
};

export default ReviewCardMini;
