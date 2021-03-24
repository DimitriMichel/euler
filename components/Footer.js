import React from 'react';
import Container from '../utility/Container';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container>
      <div className={styles.footer}>
        <div className={styles.infoColumn}>
          <h3 className={styles.infoColumn__logo}>Euler®</h3>
          <p className={styles.infoColumn__text}>
            The best tutoring platform known for offering anyone who wishes to
            take their learning to the next level
          </p>
          <div className={styles.infoColumn__socialMedia}>
            <ul aria-label="Social Media Links">
              <li className={styles.infoColumn__socialMedia__icon}>
                <a href="/" aria-label="Facebook">
                  <FaFacebook color="white" size={20} />
                </a>
              </li>
              <li className={styles.infoColumn__socialMedia__icon}>
                <a href="/" aria-label="Linked In">
                  <FaLinkedin color="white" size={20} />
                </a>
              </li>
              <li className={styles.infoColumn__socialMedia__icon}>
                <a href="/" aria-label="Twitter">
                  <FaTwitter color="white" size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.basicColumn}>
          <h4 className={styles.basicColumn__title}>About</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>For Institutions</li>
            <li>Support</li>
          </ul>
        </div>
        <div className={styles.basicColumn}>
          <h4 className={styles.basicColumn__title}>Community</h4>
          <ul>
            <li>Refer A Friend</li>
            <li>Limited Memberships</li>
            <li>Scholarships</li>
            <li>Free Sessions</li>
          </ul>
        </div>
        <div className={styles.basicColumn}>
          <h4 className={styles.basicColumn__title}>Download</h4>
          <ul>
            <li>
              <a href='/' aria-label='Link To Apple App Store Download'>
                <Image
                  src="/images/App-Store.svg"
                  height={50}
                  width={150}
                  alt="Download On the App Store"
                />
              </a>
            </li>
            <li> <a href='/' aria-label='Link To Apple App Store Download'>
              <Image
                src="/images/Play-Store.svg"
                height={50}
                width={150}
                alt="Download On the App Store"
              />
            </a></li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
