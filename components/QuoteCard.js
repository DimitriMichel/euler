import React from 'react';
import styles from './QuoteCard.module.css';
const QuoteCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.quote}>
        "Best in the tutoring field, just really the best of the best.."
      </div>
    </div>
  );
};

export default QuoteCard;
