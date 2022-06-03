import type { NextPage } from "next";
import Head from "next/head";

import "modern-css-reset";
// import styles from "../styles/Home.module.css";

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

      <main>
        <h1>Jon Deaves</h1>
        <h2>Software Developer and hobby enthusiast</h2>

        <p>
          I&apos;m an experienced developer specialising in interactive web
          applications and I take pride in creating modern, responsive and
          progressive user experiences. But when I&apos;m not writing code I
          like to dabble in a little bit of anything and everything.
        </p>
      </main>
    </>
  );
};

export default Home;
