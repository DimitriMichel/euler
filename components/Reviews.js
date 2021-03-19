import React from 'react';
import styles from './Reviews.module.css';
import ReviewCard from './ReviewCard';
import ReviewCardMini from './ReviewCardMini';
import QuoteCard from './QuoteCard';
import ReviewText from './ReviewText';
const Reviews = () => {
  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.background}>
        <div className={styles.reviewsCards}>
          <ReviewCard />
          <ReviewCardMini />
          <QuoteCard />
        </div>
        <div className={styles.reviewsMainText}>
          <ReviewText />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
