import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
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
