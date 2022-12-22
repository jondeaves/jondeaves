import type { NextPage } from "next";
import Head from "next/head";
import ExternalLink from "../components/ExternalLink";
import Layout from "../components/Layout";

const Setup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jon Deaves&apos; setup and tech</title>
        <meta
          name="description"
          content="Jon Deaves is a Software Engineer who makes things, usually with code and this is how he does it"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>My setup</h1>

        <p className="lead">
          This is the hardware, comforts and technologies that I use.
        </p>

        <h3>Desk setup</h3>

        <p>
          <ExternalLink
            href="/desk.jpg"
            label="Photo of a slightly outdated desk setup"
          />
        </p>

        <h3>Software</h3>

        <p>TBD</p>

        <h3>Technologies</h3>

        <p>TBD</p>

        <p className="small spaced">
          This was also inspired by the person who made{" "}
          <ExternalLink href="https://nownownow.com/about" label="nownownow" />,
          see{" "}
          <ExternalLink href="https://sive.rs/uses" label="Derek Sivers page" />
          .
        </p>
      </Layout>
    </>
  );
};

export default Setup;
