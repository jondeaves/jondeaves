import { format } from "date-fns";

import { Experience } from "../../shared/types/Experience";
import Heading from "../Elements/Heading";
import ExperienceBlockStyles from "./ExperienceBlock.module.css";

type ExperienceBlockProps = {
  experience: Experience;
};

const ExperienceBlock = ({ experience }: ExperienceBlockProps) => {
  return (
    <article>
      <Heading level={4} className={ExperienceBlockStyles.title}>
        {experience.title}
      </Heading>
      <Heading level={5}>
        <small>
          <em>
            {experience.company}&nbsp;&nbsp;/&nbsp;&nbsp;
            <abbr
              title={format(new Date(experience.startDate), "do MMMM yyyy")}
            >
              {format(new Date(experience.startDate), "MMMM yyyy")}
            </abbr>{" "}
            –{" "}
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

      {experience.highlights.length > 0 && (
        <ul className={ExperienceBlockStyles.list}>
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ExperienceBlock;
