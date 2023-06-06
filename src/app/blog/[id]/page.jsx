import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum!
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae
            repellat minus accusamus! Ipsum, pariatur, impedit minima modi
            temporibus odio doloribus aut debitis consectetur natus recusandae
            alias provident accusantium illum.
          </p>
          <div className={styles.author}>
            <Image
              src="/parrot.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Nabeel Akbar</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/parrot.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          autem commodi. Iusto officia eaque amet itaque molestias quasi
          blanditiis, tenetur ipsam? Aut culpa, aliquid repellendus cumque minus
          nostrum ut dolores.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
