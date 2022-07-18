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
          Id dolorem natus ad placeat galisum eum velit tempora eos quasi omnis
          laborum voluptate. Et voluptatem dolores et Quis harum ut quidem
          voluptas consequatur harum.
        </p>

        <p>
          Qui aperiam omnis ut commodi delectus sed consequatur maiores ea enim
          corporis! Eum voluptatem obcaecati ea asperiores labore voluptatem
          exercitationem est reiciendis quod sit voluptas minima. Non molestiae
          dicta et aliquid fuga non nulla beatae id labore dolore et sint
          recusandae non voluptas debitis ad accusamus suscipit!
        </p>

        {/* <p>
          I&apos;m an experienced developer specialising in interactive web
          applications and I take pride in creating modern, responsive and
          progressive user experiences.
        </p>

        <p>
          I try to keep things light and easy by not relying too much on fancy
          graphics, animations or interactivity in my own corner of the web.
          This speaks a lot to what I find frustrating with a lot of modern
          sites that have to be constantly sharing content, showing adverts and
          otherwise bombarding your senses in the pursuit of clicks, impressions
          and money.
        </p> */}
      </Layout>
    </>
  );
};

export default Home;
