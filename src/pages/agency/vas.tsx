import React from 'react';
import { PageProps } from 'gatsby';

import Seo from '../../components/Seo';
import Wrapper from '../../components/Wrapper';
import PageHeader from '../../components/Layout/PageHeader';
import Disclaimer from '../../components/Disclaimer';

const AgencyVAS: React.FC<PageProps> = () => {
  const title = 'Visual Arts Scotland';

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
              <em>Visual Arts Scotland</em>
            </strong>{' '}
            allows artists, applied artists and makers to show together.
          </p>
        </blockquote>

        <h2>The brief</h2>
        <p>
          While working with Everyone, a creative agency within Glasgow, I was able to take on a re-skin project to
          refresh the client’s website to improve the design and add additional features.
        </p>

        <h4>Exhibitions</h4>
        <p>
          The exhibitions section of the website provides information and links to exhibitions being run and allows
          visitors of the website to get a taste for what each involves. This section includes list and detail views and
          is of course fully responsive.
        </p>

        <h4>Artists</h4>
        <p>
          The artist section was a new area of the site which allows each member of{' '}
          <abbr title="Visual Arts Scotland">VAS</abbr> to show their work and provide a biography.
        </p>
        <p>
          This involved creating a listing page of each artist with a highlight of their work as well as a more detailed
          page showing the full information for each artist.
        </p>
        <p>
          The list page also includes a range of filters and search allowing the list to be reduced dependant on the
          visitor's choices. These were created as custom HTML and CSS elements rather than standard form elements to
          keep with the websites look and feel.
        </p>

        <h4>Membership</h4>
        <p>
          The membership section was perhaps the biggest piece of work for this project as it involves not only creating
          information pages but also to integrate with a payment provider.
        </p>
        <p>
          The information page provides a summary of each membership level and allows the website user to choose the
          right option for them.
        </p>
        <p>
          From there they are then taken to a registration page which provides details about the chosen membership
          level, captures all the required information from the user and then sends this information to the CMS for
          processing.
        </p>
        <p>
          Once registration is complete, the member can then link their PayPal account for recurring billing, this was
          done through the PayPal API and would schedule recurring payments to be taken on the same date. As a result,
          there was business logic in place to take an immediate payment if the registration happened outwith a certain
          time from the renewal date.
        </p>
        <p>
          For example, if a person registers 6 months before renewal they would pay immediately for the current year. If
          a person registers 1 week before renewal, then they would not need to pay and the automatic renewal would
          handle the payments.
        </p>

        <h3>Resources</h3>
        <ul>
          <li>
            The website can be found{' '}
            <a href="http://www.visualartsscotland.org" title="Visual Arts Scotland's website" rel="external">
              here
            </a>
          </li>
        </ul>
      </article>
    </Wrapper>
  );
};

export default AgencyVAS;
