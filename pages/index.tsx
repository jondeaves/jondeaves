/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ExternalLink from "../components/ExternalLink";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jon Deaves, Software Developer</title>
        <meta
          name="description"
          content="Jon Deaves is a Software Developer who makes things, usually with code"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isHomepage={true} shouldHeaderH1={true}>
        <p className="lead">
          I&apos;m an experienced developer specialising in interactive web
          applications and I take pride in creating modern, responsive and
          progressive user experiences.
        </p>

        <p>
          I try to keep things light and easy by not relying too much on fancy
          graphics, animations or interactivity in my corner of the web. This
          speaks to what I find frustrating with a lot of modern sites that have
          to be constantly sharing content, showing adverts and otherwise
          bombarding your senses in the pursuit of clicks, impressions and
          money.
        </p>

        <p>Here are some of the things you can read about on this site;</p>
        <ul className="unstyled">
          <li>
            <strong>
              <Link href="/now">Now</Link>
            </strong>{" "}
            &mdash; my now page is a summary of what I am up to right now.
          </li>
          <li>
            <strong>
              <Link href="/resume">Resume</Link>
            </strong>{" "}
            &mdash; my resume page is a non-exhaustive history of my
            professional career.
          </li>
          <li>
            <strong>
              <Link href="/setup">Setup</Link>
            </strong>{" "}
            &mdash; my setup page is a summary of what I use in my day-to-day
            life.
          </li>
          <li>
            <strong>
              <ExternalLink
                href="https://storybook.jondeaves.me/"
                label="Storybook"
              />
            </strong>{" "}
            &mdash; my storybook site is where I document most of the reusable
            components.
          </li>
        </ul>

        <figure className="spaced">
          <img
            src="/dog.png"
            alt="My dog staring longingly at the camera from his small, dog-sized, couch"
          />
          <figcaption>Here is some dog-tax for good measure</figcaption>
        </figure>
      </Layout>
    </>
  );
};

export default Home;
