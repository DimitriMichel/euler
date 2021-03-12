import React from 'react';
import styles from './Navigation.module.css';

import Image from 'next/image';
const Navigation = () => {
  return (
    <div className={styles.nav}>
      <nav role="navigation">
        <ul className={styles.desktopNav}>
          <li>
            <div className={styles.logo}>
              <div className={styles.imageContainer}>
                <Image
                  src="/sitelogo.png"
                  height="10px"
                  width="50px"
                  alt="planet with orbiting moon"
                />
              </div>
              <header
                title="Euler Tutoring Services"
                className={styles.siteName}
              >
                Euler
              </header>
            </div>
          </li>
          <li>
            <a href="/" aria-label="Kindergarten through eighth grade">
              K-8
            </a>
          </li>
          <li>
            <a href="/">High School</a>
          </li>
          <li>
            <a href="/">Higher Education</a>
          </li>
          <li>
            <a href="/">By Subject</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
