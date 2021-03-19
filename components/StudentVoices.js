import React from 'react';
import styles from './StudentVoice.module.css';
import Container from '../utility/Container';
const StudentVoices = () => {
  return (
    <Container>
      <div className={styles.studentVoices}>
        <div className={styles.studentVoicesText}>
          <h2>Our Student Voice</h2>
          <h3>"Excellent progression of material..."</h3>
          <p>
            Excellent progression of material supplementing a formal classroom
            education which has helped me get ahead and have excellent scores.
            Even in subject in which I struggled I now excel
          </p>
          <div className={styles.nameAndLocation}>
            <div className={styles.name}>John Whitaker</div>
            <div className={styles.location}>Springfield, CA</div>
          </div>
        </div>
        <div className={styles.studentVoicesImage}></div>
      </div>
    </Container>
  );
};

export default StudentVoices;
