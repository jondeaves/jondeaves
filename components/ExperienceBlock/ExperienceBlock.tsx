import { format } from "date-fns";
import { Code, Place } from "@mui/icons-material";

import { Experience } from "../../shared/types/Experience";
import Heading from "../Elements/Heading";
import ExternalLink from "../ExternalLink";
import ExperienceBlockStyles from "./ExperienceBlock.module.css";

type ExperienceBlockProps = {
  experience: Experience;
};

const ExperienceBlock = ({ experience }: ExperienceBlockProps) => {
  return (
    <section>
      <Heading level={4} className={ExperienceBlockStyles.title}>
        {experience.title}
      </Heading>
      <div className={ExperienceBlockStyles.infoGrid}>
        <Heading level={5} className={ExperienceBlockStyles.subtitle}>
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
        <Heading level={5} className={ExperienceBlockStyles.subtitle}>
          <small>
            <Place fontSize="small" aria-label="Location" className={ExperienceBlockStyles.location} /> {experience.location}
          </small>
        </Heading>
      </div>


      <Heading level={5} aria-label="Tools and technologies">
        <Code fontSize="small" className={ExperienceBlockStyles.technology} />
        <ul className="inline comma condensed">
          {experience.technologies.map((technology, idx) => <li className="tiny" key={`${experience.company}_tech_${idx}`}>{technology}</li>)}
        </ul>
      </Heading>

      {experience.highlights.length > 0 && (
        <ul className={ExperienceBlockStyles.list}>
          {experience.highlights.map((highlight, idx) => (
            <li key={`${experience.company}_highlight_${idx}`}>{highlight}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ExperienceBlock;
