import React from 'react';
import { PageProps } from 'gatsby';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';
import PageHeader from '../components/Layout/PageHeader';
import Disclaimer from '../components/Disclaimer';

const Portfolio2020: React.FC<PageProps<{}>> = () => {
  const title = 'Portfolio tech write-up for 2020';

  return (
    <Wrapper header={<PageHeader title={title} />}>
      <Seo title={title} />

      <Disclaimer>
        If you want to see the previous iteration of this article or even my entire portfolio then head over to{' '}
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

        {/* <h3>The execution</h3>
        <p>
          From the start I knew that what I wanted most was a fast, easy to maintain and easy to create site. It didn’t need to be too fancy as it was just to host a few static pages and it was to replace a custom framework I built to handle generating static files from templates.
        </p>
        <p>
          What I have come out with is a slightly more impressive content managed site which generates and deploys static html based on all content within a headless CMS called Contentful.
        </p>
        <p>
          This has meant that I can write my content in a familiar web based interface and don’t have to worry about sending it off into the world.
        </p>

        <h3>The tech</h3>
        <p>
          The project was developed using GatsbyJS, a React based static site generator. I chose this as I was looking for a personal project that would make use of React and had good previous experiences of static site generators. This was then connected to Contentful in order to retrieve content during build time and generate all the required pages and page content.
        </p>

        <h4>GatsbyJS</h4>
        <p>
          Gatsby has been a great site generator, allowing me to construct the pages using React Components and data sources.
        </p>
        <p>
          One of my favourite features so far is it’s use of GraphQL in order to query for data, this means that all you need is a plugin which connects Gatsby to your data source (Contentful in my case) and it automatically generates GraphQL schema’s to retrieve this information from within a ‘page’ level query.
        </p>

        <h4>React</h4>
        <p>
          As it uses React I was also able to implement Flow, ESLint and Prettier to ensure consistent code was being developed which follows modern practices.
        </p>

        <h4>Netlify</h4>
        <p>
          Finally the project was integrated with Netlify, which hosts the static files and my domain name is then pointed to their servers. Deployments are triggered automatically whenever project code is pushed to GitLab, or when changes are saved on Contentful. This ensures that new posts are deployed as quickly as possible without needing to jump between Contentful and Netlify.
        </p>

        <h3>Resources</h3>
        <ul>
          <li><a href="https://www.gatsbyjs.org/" rel="external">GatsbyJS</a></li>
          <li><a href="https://www.contentful.com/" rel="external">Contentful</a></li>
          <li><a href="https://flow.org/" rel="external">Flow</a></li>
          <li><a href="https://prettier.io/" rel="external">Prettier</a></li>
          <li><a href="https://www.netlify.com/" rel="external">Netlify</a></li>
        </ul> */}
      </article>

    </Wrapper>
  )
};

export default Portfolio2020;
