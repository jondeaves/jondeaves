import moment from 'moment';
import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';
import Link from '../Link';

import ExperienceStyles from './Experience.styles';
import { IOwnProps, IProps, IStyles } from './Experience.types';

export const Experience: React.FunctionComponent<IProps> = ({
  experience,
  styles,
}: IProps) => {
  // Calculate duration
  const durationArr = [];
  const startDate = !experience.startDate
    ? moment()
    : moment(experience.startDate);
  const endDate = !experience.endDate ? moment() : moment(experience.endDate);

  if (startDate && endDate) {
    const durationYears = endDate.diff(startDate, 'years');
    const durationMonths =
      endDate.diff(startDate, 'months') - durationYears * 12;

    if (durationYears > 0) {
      durationArr.push(`${durationYears} yr${durationYears > 1 ? 's' : ''}`);
    }

    if (durationMonths > 0) {
      durationArr.push(`${durationMonths} mo${durationMonths > 1 ? 's' : ''}`);
    }
  }
  return (
    <li className={`vevent ${styles.container}`}>
      <h3 className={`summary ${styles.title}`}>{experience.jobTitle}</h3>

      <h4 className={`location ${styles.subTitle}`}>
        <Link
          to={experience.companyUri}
          label={experience.companyName}
          isExternal={true}
          openInNewWindow={true}
          className={styles.subTitleLink}
        />
      </h4>

      <p className={`dates ${styles.dates}`}>
        <abbr className="dtstart" title={startDate.format('Do MMMM YYYY')}>
          {startDate.format('MMM YYYY')}
        </abbr>
        {experience.isCurrent === false && (
          <span>
            <span>&nbsp;-&nbsp;</span>
            <abbr title={endDate.format('Do MMMM YYYY')}>
              {endDate.format('MMM YYYY')}
            </abbr>
          </span>
        )}

        {experience.isCurrent === true && (
          <span>
            <span>&nbsp;-&nbsp;</span>
            Current
          </span>
        )}

        {durationArr.length > 0 && <span>&nbsp;({durationArr.join(' ')})</span>}
      </p>

      {experience.description && (
        <p
          dangerouslySetInnerHTML={{
            __html: experience.description.childMarkdownRemark.html,
          }}
        />
      )}
    </li>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(ExperienceStyles as any)(
  Experience,
);
