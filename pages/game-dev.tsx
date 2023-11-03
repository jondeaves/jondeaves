import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const GameDev: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jon Deaves&apos; game development projects</title>
        <meta
          name="description"
          content="Jon Deaves is a Software Developer who makes games as a hobby"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Game development</h1>

        <p className="lead">
          Some game development stuff here
        </p>
      </Layout>
    </>
  );
};

export default GameDev;
