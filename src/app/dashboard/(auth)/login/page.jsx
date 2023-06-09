'use client';

import React from 'react';
import styles from './page.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', { email, password });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="email" className={styles.input} />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <button className={styles.registerUser} onClick={() => signIn('google')}>
        Login with Google
      </button>
      <Link href="/dashboard/register">
        <button className={styles.registerUser}>Register Account</button>
      </Link>
    </div>
  );
};

export default Login;
