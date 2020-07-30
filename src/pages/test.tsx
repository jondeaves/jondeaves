import React from 'react';
import { PageProps } from 'gatsby';

import Wrapper from '../components/Wrapper';
import PageHeader from '../components/Layout/PageHeader';

const TestPage: React.FC<PageProps<{}>> = () => {
  return (
    <Wrapper>
      <PageHeader title="Testing display of HTML elements" preTitle="Pre title" postTitle="Post title" />
      <h2>This is 2nd level heading</h2>
      <h3>This is 3rd level heading</h3>
      <h4>This is 4th level heading</h4>
      <h5>This is 5th level heading</h5>
      <h6>This is 6th level heading</h6>

      <h2>Spacing between 2nd level heading and paragraph</h2>
      <p>This is a test paragraph.</p>
      <h3>Spacing between 3rd level heading and paragraph</h3>
      <p>This is a test paragraph.</p>
      <h4>Spacing between 4th level heading and paragraph</h4>
      <p>This is a test paragraph.</p>
      <h5>Spacing between 5th level heading and paragraph</h5>
      <p>This is a test paragraph.</p>
      <h6>Spacing between 6th level heading and paragraph</h6>
      <p>This is a test paragraph.</p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue nunc, hendrerit vel est sed, cursus faucibus orci. Aliquam pulvinar, nisl a hendrerit bibendum, nunc metus gravida sapien, in convallis massa quam non turpis. Fusce metus sem, mattis vel fermentum sed, rhoncus sit amet ligula. Quisque egestas nisi sed elit rhoncus bibendum. Morbi varius laoreet consectetur. Pellentesque facilisis ut neque non accumsan. Pellentesque quam felis, rhoncus sit amet leo nec, aliquet pellentesque dolor. In eu turpis at velit sodales tempor. Aliquam imperdiet, arcu sit amet ultrices iaculis, tellus odio maximus mauris, in faucibus velit nibh sit amet augue. Integer urna quam, gravida malesuada facilisis id, elementum eget sapien. Donec a urna sapien. Duis fermentum justo at mauris sodales accumsan. Ut at dolor a purus gravida sollicitudin ac ac magna. Morbi consequat pulvinar imperdiet. Sed eu pharetra neque.
      </p>

      <p>This is a paragraph with an external link to <a href="https://google.co.uk" rel="external">Google</a>.</p>

      <p>This is a paragraph with a <code>code</code> block inside</p>

      <blockquote>This is a block quote</blockquote>

      <address>
        An address block |&nbsp;
        <a href="/now" lang="en-GB" hrefLang="en-GB">Jon Deaves</a>,
        Glasgow, Scotland, UK
      </address>

      <h2>List elements</h2>
      <ul>
        <li>One.</li>
        <li>Two.</li>
        <li>
          Three. Well, probably this list item should be longer. Note that
          for short items lists look better if they are compactly presented,
          whereas for long items, it would be better to have more vertical spacing between items.
        </li>
        <li>
          Four. This is the last item in this list.
          Let us terminate the list now without making any more fuss about it.
        </li>
      </ul>

      <h2>Text-level markup</h2>

      <ul>
        <li><abbr title="Cascading Style Sheets">CSS</abbr> (an abbreviation;
        <code>abbr</code> markup used)</li>
        <li> <b>bolded</b> (<code>b</code> markup used - just bolding with unspecified
        semantics)</li>
        <li> <big>big thing</big> (<code>big</code> markup used)</li>
        <li> <cite>Origin of Species</cite> (a book title;
        <code>cite</code> markup used)</li>
        <li> <code>a[i] = b[i] + c[i);</code> (computer code; <code>code</code> markup used)</li>
        <li> here we have some <del>deleted</del> text (<code>del</code> markup used)</li>
        <li> an <dfn>octet</dfn> is an entity consisting of eight bits
        (<code>dfn</code> markup used for the term being defined)</li>
        <li> this is <em>very</em> simple (<code>em</code> markup used for emphasizing
        a word)</li>
        <li> <i lang="la">Homo sapiens</i> (should appear in italics;  <code>i</code> markup used)</li>
        <li> here we have some <ins>inserted</ins> text (<code>ins</code> markup used)</li>
        <li> type <kbd>yes</kbd> when prompted for an answer (<code>kbd</code> markup
        used for text indicating keyboard input)</li>
        <li> <q>Hello!</q> (<code>q</code> markup used for quotation)</li>
        <li> He said: <q>She said <q>Hello!</q></q> (a quotation inside a quotation)</li>
        <li> you may get the message <samp>Core dumped</samp> at times
        (<code>samp</code> markup used for sample output)</li>
        <li> <small>this is not that important</small> (<code>small</code> markup used)</li>
        <li> <strong>this is highlighted text</strong> (<code>strong</code>
        markup used)</li>
        <li> In order to test how subscripts and superscripts (<code>sub</code> and
        <code>sup</code> markup) work inside running text, we need some
        dummy text around constructs like x<sub>1</sub> and H<sub>2</sub>O
        (where subscripts occur). So here is some fill so that
        you will (hopefully) see whether and how badly the subscripts
        and superscripts mess up vertical spacing between lines.
        Now superscripts: M<sup>lle</sup>, 1<sup>st</sup>, and then some
        mathematical notations: e<sup>x</sup>, sin<sup>2</sup> <i>x</i>,
        and some nested superscripts (exponents) too:
        e<sup>x<sup>2</sup></sup> and f(x)<sup>g(x)<sup>a+b+c</sup></sup>
        (where 2 and a+b+c should appear as exponents of exponents).</li>
        <li> <u>underlined</u> text (<code>u</code> markup used)</li>
        <li> the command <code>cat</code> <var>filename</var> displays the
        file specified by the <var>filename</var> (<code>var</code> markup
        used to indicate a word as a variable).</li>
      </ul>

    </Wrapper>
  )
};

export default TestPage;
