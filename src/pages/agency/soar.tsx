import React from 'react';
import { PageProps } from 'gatsby';

import Seo from '../../components/Seo';
import Wrapper from '../../components/Wrapper';
import PageHeader from '../../components/Layout/PageHeader';
import Disclaimer from '../../components/Disclaimer';

const AgencySoar: React.FC<PageProps> = () => {
  const title = 'SOAR Running';

  return (
    <Wrapper header={<PageHeader title={title} backLinkLabel="Agency Work" backLinkRoute="/agency-work" />}>
      <Seo title={title} />

      <Disclaimer>
        This page is categorised as <strong>Old reading</strong> as the work was done by me a few years ago and likely
        look different now from when I implemented it.
      </Disclaimer>

      <article>
        <blockquote>
          <p>
            <strong>
              <em>Soar performance running wear</em>
            </strong>{' '}
            is designed to be better. Every cut and every seam is carefully considered, every fabric chosen for its
            exceptional technical qualities.
          </p>
        </blockquote>

        <h2>The brief</h2>
        <p>
          While working with Everyone, a creative agency within Glasgow, I had the opportunity to work on this website
          from the very beginning. The client, a sportswear company focusing on runners, wanted a website to sell their
          products.
        </p>

        <h3>The tech</h3>
        <p>
          Having received several photoshop design files it was my task to turn these into functional web pages using
          the in-house CMS which is based on PHP and MySQL. Due to the deadlines associated with this project the work
          was split between two developers, the second developer handled the integration with our e-commerce systems
          while I focused on the UI and other features.
        </p>

        <h4>Instagram</h4>
        <p>
          To ensure the product is properly represented the site uses s lot of imagery. This was achieved in two parts;
          through the use of blog posts and banner images within the CMS and with the use of API integration with
          Instagram.
        </p>
        <p>
          I developed an integration with the Instagram API to pull images and text from the feed and show this on the
          main website, ensuring content can be kept fresh and relevant with greater ease.
        </p>

        <h4>Spotify</h4>
        <p>
          The client wanted to ensure a strong presence across all relevant social media services and as a result of
          this, I was able to develop an API integration with Spotify. This has allowed a feed of playlists to be
          displayed on the website which the creators would share to provide runners with focus through music.
        </p>
        <p>
          The integration involved pulling in follows and data about each playlist and displaying relevant details on
          our UI.
        </p>

        <h4>Mailchimp</h4>
        <p>
          As with most sites of this nature, the client wanted to ensure they kept in touch with current and future
          customers through the use of marketing campaigns. The first step in this was to capture the details of
          everyone interested, which was achieved through a list of those willing to receive emails. My work for Soar
          also included building and managing their email campaigns through MailChimp’s email builder tools.
        </p>
        <p>
          Within the website we capture email addresses and send those to MailChimp through the provided API, we then
          display this list within the admin area and provide tools to review and prune this list.
        </p>

        <h3>Resources</h3>
        <ul>
          <li>
            The website can be found{' '}
            <a href="https://www.soarrunning.com" title="Soar Running's website" rel="external">
              here
            </a>
          </li>
        </ul>
      </article>
    </Wrapper>
  );
};

export default AgencySoar;
