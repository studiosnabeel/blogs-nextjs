import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/deer.jpg"
            alt=""
            width={250}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            delectus?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Molestias, delectus?Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Molestias, delectus?
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/lamb.jpg"
            alt=""
            width={250}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            delectus?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Molestias, delectus?Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Molestias, delectus?
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/parrot.jpg"
            alt=""
            width={250}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            delectus?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Molestias, delectus?Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Molestias, delectus?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
