import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jon Deaves, Software Developer</title>
        <meta
          name="description"
          content="Jon Deaves is a Software Engineer who makes things, usually with code"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isHomepage={true}>
        <p>
          I try to keep things light and easy by not relying too much on fancy
          graphics, animations or interactivity in my own corner of the web.
          This speaks a lot to what I find frustrating with a lot of modern
          sites that have to be constantly sharing content, showing adverts and
          otherwise bombarding your senses in the pursuit of clicks, impressions
          and money.
        </p>
      </Layout>
    </>
  );
};

export default Home;
