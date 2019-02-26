import Img from 'gatsby-image';
import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';
import Experience from '../Experience';
import Skill from '../Skills';

import AboutStyles from './About.styles';
import { IOwnProps, IProps, IStyles } from './About.types';

export const About: React.FunctionComponent<IProps> = ({
  experienceList,
  featuredImage,
  microdata,
  skills,
  styles,
  summary,
}: IProps) => {
  return (
    <article className={styles.container}>
      <h1 className={styles.header}>
        <span className="fn">
          <span className="given-name">{microdata.givenName}</span>{' '}
          <span className="family-name">{microdata.familyName}</span>
        </span>
      </h1>

      <div className={styles.grid}>
        <div className={styles.photoGridItem}>
          <div className={styles.photoWrapper}>
            <Img
              fixed={featuredImage.fixed}
              title={featuredImage.title}
              className={styles.innerImage}
            />
          </div>
        </div>

        <div className={styles.summaryGridItem}>
          <address id="vcard" className={styles.address}>
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

          <div
            id="summary"
            className={styles.summary}
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>

        <div className={styles.experienceGridItemLeft}>
          <h2 id="experience">Experience</h2>
        </div>
        <div className={styles.experienceGridItemRight}>
          <ol className={`vcalendar ${styles.aboutList}`}>
            {experienceList.edges.map((experience, idx) => (
              <Experience key={idx} experience={experience.node} />
            ))}
          </ol>
        </div>

        <div className={styles.skillsGridItemLeft}>
          <h2 id="experience">Skills</h2>
        </div>
        <div className={styles.skillsGridItemRight}>
          <ul className={styles.aboutList}>
            {skills.sort().map((skill, idx) => (
              <Skill key={idx} title={skill} />
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(AboutStyles as any)(About);
