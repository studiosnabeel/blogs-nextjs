import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about-image"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            tenetur placeat veniam excepturi odit libero voluptatum enim.
            Repudiandae sit assumenda ducimus facilis.
            <br />
            <br />
            Harum excepturi quibusdam accusantium sint recusandae nihil
            incidunt. Doloribus dicta omnis a nostrum sequi, ratione consectetur
            rerum voluptates?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Do</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim
            nulla officia recusandae pariatur laborum quaerat consequatur
            quibusdam fugiat aliquid hic blanditiis fuga nemo
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />- Fast and Handy
            <br />
            <br />- Mobile Apps
          </p>

          <Button url="/contact" text="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
