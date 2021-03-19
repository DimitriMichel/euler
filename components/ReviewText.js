import React from 'react';
import styles from './ReviewsText.module.css';
const ReviewText = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Our Review Highlights</h2>
      <p className={styles.text}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <button className={styles.btn__text}>Learn More</button>
    </div>
  );
};

export default ReviewText;
