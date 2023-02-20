import { format } from "date-fns";

import { Experience } from "../../shared/types/Experience";
import Heading from "../Elements/Heading";
import ExternalLink from "../ExternalLink";
import ExperienceBlockStyles from "./ExperienceBlock.module.css";

type ExperienceBlockProps = {
  experience: Experience;
};

const ExperienceBlock = ({ experience }: ExperienceBlockProps) => {
  return (
    <div>
      <Heading level={4} className={ExperienceBlockStyles.title}>
        {experience.title}
      </Heading>
      <Heading level={5}>
        <small>
          <em>
            {experience.url ? (
              <ExternalLink href={experience.url} label={experience.company} />
            ) : (
              <>{experience.company}</>
            )}
            <span aria-hidden={true}>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            <span className="hidden">from&nbsp;</span>
            <abbr
              title={format(new Date(experience.startDate), "do MMMM yyyy")}
            >
              {format(new Date(experience.startDate), "MMMM yyyy")}
            </abbr>{" "}
            <span aria-label="to">–</span>{" "}
            {experience.endDate ? (
              <abbr
                title={format(new Date(experience.endDate), "do MMMM yyyy")}
              >
                {format(new Date(experience.endDate), "MMMM yyyy")}
              </abbr>
            ) : (
              "Present"
            )}
          </em>
        </small>
      </Heading>

      {experience.note && <p className="small nospace">** {experience.note}</p>}

      {experience.highlights.length > 0 && (
        <ul className={ExperienceBlockStyles.list}>
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceBlock;
