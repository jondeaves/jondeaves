import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jon Deaves | Software Developer</title>
        <meta
          name="description"
          content="Jon Deaves is a Software Engineer who makes things, usually with code"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Jon Deaves</h1>
        <h2>Software Developer and hobby enthusiast</h2>

        <p className={styles.description}>
          An experienced developer specialising in interactive web applications.
          I take pride in creating modern, responsive and progressive user
          experiences.
        </p>
      </main>
    </>
  );
};

export default Home;
