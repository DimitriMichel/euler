import React from "react";
import styles from './Reviews.module.css'
import ReviewCard from "./ReviewCard";
const Reviews = () => {
  return (
    <section className={styles.reviews} id='reviews'>
      <div className={styles.background}>
        <ReviewCard/>
      </div>
    </section>
  );
};

export default Reviews;