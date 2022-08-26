import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
        <p className="lead">
          I&apos;m an experienced developer specialising in interactive web
          applications and I take pride in creating modern, responsive and
          progressive user experiences.
        </p>

        <p>
          I try to keep things light and easy by not relying too much on fancy
          graphics, animations or interactivity in my own corner of the web.
          This speaks to what I find frustrating with a lot of modern sites that
          have to be constantly sharing content, showing adverts and otherwise
          bombarding your senses in the pursuit of clicks, impressions and
          money.
        </p>

        <p>
          Why not check out some of the &apos;Magic&apos; of how the site is
          made by going to the [storybook link coming soon].
        </p>
      </Layout>
    </>
  );
};

export default Home;
