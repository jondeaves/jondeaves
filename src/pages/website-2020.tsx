import React from 'react';
import { PageProps } from 'gatsby';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';
import PageHeader from '../components/Layout/PageHeader';
import Disclaimer from '../components/Disclaimer';

const Website2020: React.FC<PageProps<{}>> = () => {
  const title = 'Website tech write-up for 2020';

  return (
    <Wrapper header={<PageHeader title={title} />}>
      <Seo title={title} />

      <Disclaimer>
        If you want to see the previous iteration of this article on v2 of my website then head over to{' '}
        <a href="https://v2.jondeaves.me/posts/portfolio" rel="external">the archived version</a>.
      </Disclaimer>

      <article>
        <p>
          <strong><em>The web is fat</em></strong> so I'm doing my part and putting my website on a weightloss plan.
        </p>

        <h2>Why another rewrite?</h2>
        <p>
          I don't exactly know when it started for me but the more I worked on websites and learned things about the
          technology the more I started to get annoyed by the content I would come across.
        </p>

        <p>
          Far too often I find myself backing out of an article I wanted to read because when I open it on my phone I
          have annoying modals, confirmations and adverts thrust into my face. This leaves no room to see the actual
          content and pretty much destroys the experience. Not to mention the performance of the sites.
        </p>

        <p>
          There are still good sites out there, here is my attempt.
        </p>

        <h3>The execution</h3>

        <p>For this rewrite, the previous mission statement has been carried over and enhanced.</p>

        <blockquote>
          <p>Fast, easy to maintain and easy to create.</p>
        </blockquote>

        <p>Carrying on from that I wanted to ensure my site was simple, almost basic, in its design and implementation.</p>

        <ul>
          <li>Instead of a Content management system, I make use of React Typescript components.</li>
          <li>Instead of images, fancy stylings and interactive content I have text only with very limited basic CSS.</li>
          <li>Instead of having one large CV/Portfolio trying to sell myself, the site is now more of a place to dump my thoughts.</li>
        </ul>

        <h3>The tech</h3>

        <h4>GatsbyJS</h4>

        <p>
          The website still uses GatsbyJS to actually build everything out. I've used it for quite a few projects now
          and it always does the job well. As mentioned above the main difference here is that it is no longer connected
          to a Content management system, instead I now write out the content manually in the codebase.
        </p>

        <h4>React with Typescript</h4>
        <p>
          Gatsby comes with built-in support for Typescript now. My love for Typescript doesn't come from any sort of
          fancy technical reasoning or even really about how it improves code quality or consistency, don't get me wrong
          as these things are definitely nice, but my enjoyment of Typescript comes from how it reminds me of other
          languages.
        </p>

        <p>
          It reminds me of when I used to work in C# building games using XNA, MonoGame, Unity, etc. These were always
          passion projects I did for fun.
        </p>

        <h4>Styling is a Treat</h4>

        <blockquote>
          <p>Themeable, statically extracted CSS‑in‑JS with near‑zero runtime.</p>
        </blockquote>

        <p>
          With this iteration of the site, I combined usage of the Typography Gatsby plugin and a new styling library
          called Treat. Typography allowed me to set a bunch of sensible defaults and global styles based on a theme
          called <code>US Web Design Standards Theme</code> while Treat was used to customize certain aspects of layout,
          spacing, etc.
        </p>

        <p>
          What's important to note here is that Typography really does the heavy lifting. I really wanted to make sure
          I wasn't creating custom styles for pretty much every paragraph, div, etc. So the vast majority of content on
          the site should use standard HTML elements with basic styling.
        </p>


        <h4>Netlify</h4>
        <p>
          The website itself is still hosted on Netlify, again this is something I use on a variety of projects and find
          to be one of the best hosting services I've used. With this new builds of the site are triggered when code is
          pushed to the <code>main</code> branch of GitHub or when pull requests are opened to preview the changes.
        </p>

        <h3>Resources</h3>
        <ul>
          <li><a href="https://www.gatsbyjs.org/" rel="external">GatsbyJS</a></li>
          <li><a href="https://www.netlify.com/" rel="external">Netlify</a></li>
          <li><a href="https://seek-oss.github.io/treat/" rel="external">Treat</a></li>
        </ul>
      </article>

    </Wrapper>
  )
};

export default Website2020;
