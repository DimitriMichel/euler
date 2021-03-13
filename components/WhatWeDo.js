import React from 'react';
import styles from './WhatWeDo.module.css';
const WhatWeDo = () => {
  return (
    <section id="WhatWeDo">
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <h5 className={styles.subtitle}>What We Do</h5>
          <h2 className={styles.title}>
            Euler is a platform that seeks to democratize the elite training enjoyed
            by 90%+ of Ivy league entrants.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
