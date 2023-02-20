import React, { JSXElementConstructor } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Elements/Typography",
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<JSXElementConstructor<unknown>>;

const Template: ComponentStory<JSXElementConstructor<unknown>> = () => (
  <div style={{ padding: 32 }}>
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    <h4>Heading level 4</h4>
    <h5>Heading level 5</h5>
    <h6>Heading level 6</h6>
    <hr />

    <p className="lead">
      This is a leading paragraph, it stands out a bit more than normal. Id
      dolorem natus ad placeat galisum eum velit tempora eos quasi omnis laborum
      voluptate.
    </p>

    <p>
      Qui aperiam omnis ut commodi delectus sed consequatur maiores ea enim
      corporis! Eum voluptatem obcaecati ea asperiores labore voluptatem
      exercitationem est reiciendis quod sit voluptas minima. Non molestiae
      dicta et aliquid fuga non nulla beatae id labore dolore et sint recusandae
      non voluptas debitis ad accusamus suscipit!
    </p>

    <ul className="unstyled large">
      <li>
        <code>&lt;abbr&gt;</code> This text contains abbreviations such as{" "}
        <abbr title="attribute">attr</abbr> and{" "}
        <abbr title="HyperText Markup Language">HTML</abbr>.
      </li>
      <li>
        <code>&lt;a&gt;</code> <a href="#link">Links like this</a> will have an
        underline that is emphasised upon focus.
      </li>

      <li>
        <code>&lt;mark&gt;</code> You can use the mark tag to{" "}
        <mark>highlight</mark> text.
      </li>
      <li>
        <code>&lt;del&gt;</code>{" "}
        <del>This line of text is meant to be treated as deleted text.</del>
      </li>
      <li>
        <code>&lt;s&gt;</code>{" "}
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </li>
      <li>
        <code>&lt;ins&gt;</code>{" "}
        <ins>
          This line of text is meant to be treated as an addition to the
          document.
        </ins>
      </li>
      <li>
        <code>&lt;u&gt;</code>{" "}
        <u>This line of text will render as underlined.</u>
      </li>
      <li>
        <code>&lt;small&gt;</code>{" "}
        <small>
          represents side-comments and small print, like copyright and legal
          text.
        </small>
      </li>
      <li>
        <code>&lt;strong&gt;</code>{" "}
        <strong>This line rendered as bold text.</strong>
      </li>
      <li>
        <code>&lt;em&gt;</code> <em>This line rendered as italicized text.</em>
      </li>

      <li>
        <figure>
          <blockquote aria-describedby="quotedesc">
            <p>
              &#8220;A well-known quote, contained in a blockquote
              element.&#8221;
            </p>
          </blockquote>
          <figcaption id="quotedesc">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </li>
    </ul>
    <hr />

    <ul>
      <li>Standard item 1</li>
      <li>Standard item 2</li>
      <li>
        Standard item 3
        <ul>
          <li>Sub item 1</li>
          <li>Sub item 2</li>
        </ul>
      </li>
    </ul>

    <ul className="unstyled">
      <li>Unstyled item 1</li>
      <li>Unstyled item 2</li>
      <li>Unstyled item 3</li>
    </ul>

    <ul className="large">
      <li>Large item 1</li>
      <li>Large item 2</li>
      <li>Large item 3</li>
    </ul>

    <ul className="inline">
      <li>Inline item 1</li>
      <li>Inline item 2</li>
      <li>Inline item 3</li>
    </ul>

    <dl>
      <dt>A description list</dt>
      <dd>
        Uses the mark-up{" "}
        <code>
          &lt;dl&gt; &lt;dt&gt;Term&lt;/dt&gt; &lt;dd&gt;Definition of
          term&lt;/dd&gt; &lt;/dl&gt;
        </code>{" "}
      </dd>
      <dd>Is used to describe groups of terms</dd>

      <dt>Another term</dt>
      <dd>This definition is short, so no extra paragraphs or anything.</dd>

      <dt>Longer Term</dt>
      <dd>
        <p>It contains two paragraphs</p>
        <p>And some more placeholder definition text.</p>
      </dd>
    </dl>
  </div>
);

export const Default = Template.bind({});
