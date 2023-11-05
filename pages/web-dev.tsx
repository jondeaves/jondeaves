import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const WebDev: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jon Deaves&apos; web development projects</title>
        <meta
          name="description"
          content="Jon Deaves is a Web Developer who makes websites"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Web development</h1>

        <p className="lead">
          Some web development stuff here
        </p>
      </Layout>
    </>
  );
};

export default WebDev;
