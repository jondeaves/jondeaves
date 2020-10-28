import React from 'react';
import { PageProps } from 'gatsby';

import Seo from '../../components/Seo';
import Wrapper from '../../components/Wrapper';
import PageHeader from '../../components/Layout/PageHeader';
import Disclaimer from '../../components/Disclaimer';

const AgencyCMF: React.FC<PageProps> = () => {
  const title = 'Celtic Media Festival';

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
              <em>The Celtic Media Festival</em>
            </strong>{' '}
            is an annual 3-day event that promotes the languages and cultures of the Celtic Nations and Regions in
            media. It combines a major conference of seminars and masterclasses with the presentation of coveted prizes
            in an international competition across all the main content genres in TV, radio, film and digital media.
          </p>
        </blockquote>

        <h2>The brief</h2>
        <p>
          While working with Everyone, a creative agency within Glasgow, I was tasked with some minor content updates
          and the maintenance of the Celtic Media Festival website. For the most part, this was simple work however
          during the festival time the media upload system required large improvements and maintenance.
        </p>

        <h3>Media processing</h3>
        <p>
          During the run-up to the festival, the website accepts submissions online using the website’s members area. At
          a high level, this would involve uploading, processing and viewing of videos and associated media.
        </p>
        <p>This can be broken down into several parts;</p>

        <h4>Upload</h4>
        <p>
          The media uploader would accept files on the web frontend and would send these to amazon web services S3
          storage. Because the filenames would often contain non-standard alpha-numerical characters it was important to
          take care when accepting files so that context within the file names was not lost.
        </p>

        <h4>Processing</h4>
        <p>
          The video processing was handled by a powerful Amazon web services EC2 instance that would be started by a
          scheduled task and process the videos early morning each day and these would then be saved to the final
          location within S3 with the unprocessed files being removed.
        </p>

        <h4>Viewing</h4>
        <p>
          The member's area would then have a section for viewing each submission allowing judging to take place before
          the festival. This was achieved through the use of a media player which would also each judge to view all
          videos assigned to their category.
        </p>

        <h3>Resources</h3>
        <ul>
          <li>
            The website can be found{' '}
            <a href="http://www.celticmediafestival.co.uk/" title="Celtic Media Festival's website" rel="external">
              here
            </a>
          </li>
        </ul>
      </article>
    </Wrapper>
  );
};

export default AgencyCMF;
