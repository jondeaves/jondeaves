import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Typography: NextPage = () => {
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

      <Layout>
        <p>
          <small>
            Yes I have shamelessly stolen the markup and example text from{" "}
            <a
              href="https://getbootstrap.com/docs/5.2/content/typography/"
              rel="external"
            >
              Bootstrap
            </a>
          </small>
        </p>
        <h1>Heading level 1</h1>
        <h2>Heading level 2</h2>
        <h3>Heading level 3</h3>
        <h4>Heading level 4</h4>
        <h5>Heading level 5</h5>
        <h6>Heading level 6</h6>

        <p className="lead">
          This is a leading paragraph, it stands out a bit more than normal.Id
          dolorem natus ad placeat galisum eum velit tempora eos quasi omnis
          laborum voluptate.
        </p>

        <p>
          Qui aperiam omnis ut commodi delectus sed consequatur maiores ea enim
          corporis! Eum voluptatem obcaecati ea asperiores labore voluptatem
          exercitationem est reiciendis quod sit voluptas minima. Non molestiae
          dicta et aliquid fuga non nulla beatae id labore dolore et sint
          recusandae non voluptas debitis ad accusamus suscipit!
        </p>

        <p>
          This text contains abbreviations such as{" "}
          <abbr title="attribute">attr</abbr> and{" "}
          <abbr title="HyperText Markup Language">HTML</abbr>.
        </p>

        <p>
          <code>&lt;mark&gt;</code> You can use the mark tag to{" "}
          <mark>highlight</mark> text.
        </p>
        <p>
          <code>&lt;del&gt;</code>{" "}
          <del>This line of text is meant to be treated as deleted text.</del>
        </p>
        <p>
          <code>&lt;s&gt;</code>{" "}
          <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>
        <p>
          <code>&lt;ins&gt;</code>{" "}
          <ins>
            This line of text is meant to be treated as an addition to the
            document.
          </ins>
        </p>
        <p>
          <code>&lt;u&gt;</code>{" "}
          <u>This line of text will render as underlined.</u>
        </p>
        <p>
          <code>&lt;small&gt;</code>{" "}
          <small>
            represents side-comments and small print, like copyright and legal
            text.
          </small>
        </p>
        <p>
          <code>&lt;strong&gt;</code>{" "}
          <strong>This line rendered as bold text.</strong>
        </p>
        <p>
          <code>&lt;em&gt;</code>{" "}
          <em>This line rendered as italicized text.</em>
        </p>

        <blockquote aria-describedby="quotedesc">
          <p>
            &#8220;A well-known quote, contained in a blockquote element.&#8221;
          </p>
        </blockquote>
        <figcaption id="quotedesc">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </Layout>
    </>
  );
};

export default Typography;