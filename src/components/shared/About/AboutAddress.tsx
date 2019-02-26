import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import AboutAddressStyles from './AboutAddress.styles';
import { IOwnProps, IProps, IStyles } from './AboutAddress.types';

export const AboutAddress: React.FunctionComponent<IProps> = ({
  microdata,
  styles,
}: IProps) => {
  return (
    <address id="vcard" className={styles.container}>
      <span className={`fn ${styles.show}`}>
        Name: <span className="given-name">{microdata.givenName}</span>{' '}
        <span className="family-name">{microdata.familyName}</span>
      </span>
      <span className={`title ${styles.hide}`}>{microdata.title}</span>
      <span className={styles.hide}> in </span>
      <span className={`adr ${styles.hide}`}>
        <span className="locality">{microdata.address.locality}</span>
        ,&nbsp;
        <span className="region">{microdata.address.region}</span>.&nbsp;
      </span>
      <span className={styles.hide}>
        <br />
      </span>

      <span>
        Email:{' '}
        <a className="email" href={`mailto:${microdata.contact.email}`}>
          {microdata.contact.email}
        </a>
      </span>
      <span className={styles.hide}>
        <br />
      </span>
      <span>
        Site:{' '}
        <a
          className="url"
          href={microdata.contact.site.href}
          target="_blank"
          rel="external"
        >
          {microdata.contact.site.title}
        </a>
        <span className={styles.hide}>
          ,&nbsp;
          <a
            className="url"
            href={microdata.contact.social.github}
            target="_blank"
            rel="external"
          >
            GitHub
          </a>
        </span>
        <span className={styles.hide}>
          ,&nbsp;
          <a
            className="url"
            href={microdata.contact.social.linkedin}
            target="_blank"
            rel="external"
          >
            LinkedIn
          </a>
        </span>
        <span className={styles.hide}>
          ,&nbsp;
          <a
            className="url"
            href={microdata.contact.social.twitter}
            target="_blank"
            rel="external"
          >
            Twitter
          </a>
        </span>
      </span>
    </address>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(AboutAddressStyles as any)(
  AboutAddress,
);
