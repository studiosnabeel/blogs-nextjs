import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 NextBlogs. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="Facebook icon"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="Instagram icon"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="Twitter icon"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="Youtube icon"
          width={15}
          className={styles.icon}
          height={15}
        />
      </div>
    </div>
  );
};

export default Footer;
