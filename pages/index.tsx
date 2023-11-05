import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ExternalLink from "../components/ExternalLink";
import Layout from "../components/Layout";
import TagLine from "../components/TagLine";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jon Deaves, Web Developer</title>
        <meta
          name="description"
          content="Jon Deaves is a Web Developer who makes things, usually with code"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isHomepage={true} shouldHeaderH1={true}>
        <TagLine />

        <p>
          I try to keep things light and easy by not relying too much on fancy
          graphics, animations or interactivity in my corner of the web. This
          speaks to what I find frustrating with a lot of modern sites that have
          to be constantly sharing content, showing adverts and otherwise
          bombarding your senses in the pursuit of clicks, impressions and
          money.
        </p>

        <h3 className="spaced">Things to read</h3>

        <ul className="unstyled">
          {/* <li>
            My main pursuit is{" "}
            <strong>
              <Link href="/web-dev">web development</Link>
            </strong>
          </li>
          <li>
            My eternal hobby is{" "}
            <strong>
              <Link href="/game-dev">game development</Link>
            </strong>
          </li> */}
          <li>
            My non-exhaustive history is contained in my{" "}
            <strong>
              <Link href="/resume">resume</Link>
            </strong>
          </li>
          <li>
            My <strong><Link href="/setup">setup</Link></strong>{" "}
            page is what I use
          </li>
          <li>
            My <strong><Link href="/now">now</Link></strong>{" "} page
            is what I am doing
          </li>
          <li>
            My reusable components are documented in{" "}
            <strong>
              <ExternalLink
                href="https://storybook.jondeaves.me/"
                label="Storybook"
              />
            </strong>
          </li>
        </ul>
      </Layout>
    </>
  );
};

export default Home;
