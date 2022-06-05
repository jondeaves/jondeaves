import type { NextPage } from "next";
import Head from "next/head";

// import "modern-css-reset";

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

      <main className="card">
        <h1>Jon Deaves</h1>
        <h2>Software Engineer</h2>
        <h3>
          <a href="https://webflow.com/" rel="external">
            @Webflow
          </a>
        </h3>

        <ul>
          <li>
            <a href="https://linkedin.com/in/jondeaves" rel="external">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/jondeaves" rel="external">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://npmjs.com/~jondeaves" rel="external">
              npm
            </a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;

/*
<p>
  I&apos;m an experienced developer specialising in interactive web
  applications and I take pride in creating modern, responsive and
  progressive user experiences. But when I&apos;m not writing code I
  like to dabble in a little bit of anything and everything.
</p>
        */
