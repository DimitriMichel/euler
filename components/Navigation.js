import React from 'react';
import styles from './Navigation.module.css';
import Container from '../utility/Container';
import Image from 'next/image';
const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Container>
        <nav role="navigation">
          <ul className={styles.desktopNav}>
            <li>
              <div className={styles.logo}>
                <header
                  title="Euler Tutoring Services"
                  className={styles.siteName}
                >
                  <div className={styles.name}>Euler</div>
                  <span className={styles.rightsReservedSymbol}>®</span>
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
      </Container>
    </div>
  );
};

export default Navigation;
