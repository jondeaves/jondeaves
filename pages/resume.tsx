import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { CalendarMonth, GitHub, LinkedIn, Place, Public } from "@mui/icons-material";

import { Experience } from "../shared/types/Experience";

import ExperienceBlock from "../components/ExperienceBlock";
import TagLine from "../components/TagLine";
import ExternalLink from "../components/ExternalLink";
import ResumeLayout from "../components/ResumeLayout";
import Header from "../components/Header";

import ResumeLayoutStyles from "../components/ResumeLayout/ResumeLayout.module.css";

const Resume: NextPage = () => {
  const experienceData: Experience[] = [
    {
      title: "Software Engineer",
      url: "https://webflow.com/",
      company: "Webflow",
      location: "Remote",
      startDate: "2021-09-01",
      endDate: "2023-02-07",
      highlights: [
        "My work initially focused on the Audit panel and default element accessibility, which helps users ensure the sites they build can meet various accessibility requirements",
        "As part of the Productivity team, my work on automating our accessibility testing helped educate engineers on building with accessibility in mind by default. A strong focus on documentation and communication with many other teams were key to the success of the project",
        "I also had the opportunity to assist the design system team. Helping to build and update design system components with a particular focus on accessibility",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS/TS",
        "React",
        "Next.js",
        "Jest",
        "Cypress",
        "A11Y",
      ],
    },
    {
      title: "Senior Software Engineer",
      url: "https://www.fanduel.com/",
      company: "FanDuel",
      location: "Glasgow, UK",
      startDate: "2018-05-22",
      endDate: "2021-08-24",
      highlights: [
        "Worked as part of a scrum team to build and maintain Deposit and Withdrawal pages",
        "Led a team of engineers, from intern to lead engineer, who worked across the account and wallet screens",
        "Worked closely with Designers, Product owners and business analysts to ensure project success",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS/TS",
        "React",
        "Redux",
        "Jest",
        "Cypress",
      ],
    },

    {
      title: "UI Developer",
      url: "https://deepmatter.io/",
      company: "DeepMatter",
      location: "Glasgow, UK",
      startDate: "2018-01-08",
      endDate: "2018-05-18",
      highlights: [
        "Worked with React as part of a multi-disciplined scrum team",
        "Took ownership of improvements to code quality and consistency for the web team",
        "Created and maintained the CI pipelines for web and backend",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS/TS",
        "React",
        "Jenkins",
      ],
    },

    {
      title: "UI Developer",
      url: "https://www.cgi.com/",
      company: "CGI UK",
      location: "Glasgow, UK",
      startDate: "2016-01-25",
      endDate: "2018-01-05",
      highlights: [
        "Worked with HTML, CSS, NodeJS, and Handlebars as part of a multi-disciplined scrum team",
        "Developed the online jury response system for England and Wales ensuring strict adherence to the GDS Guidelines while using the publicly available design system",
        "Developed a detailed suite of end-to-end tests which made use of Cucumber to translate business requirements into test steps",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS/TS",
        "Angular",
        "Node.js",
        "A11Y",
      ],
    },

    {
      title: "Web Developer",
      url: "https://www.weareeveryone.com/",
      company: "Everyone",
      location: "Glasgow, UK",
      startDate: "2015-02-16",
      endDate: "2016-01-22",
      highlights: [
        "Develop and maintain client websites",
        "Worked closely with the design team to implement pixel-perfect, modern, and performant web experiences",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS/TS",
        "jQuery",
        "PHP",
        "MySQL",
        "E-commerce",
      ],
    },

    {
      title: "Web Developer",
      url: "https://www.binarytechnologies.co.uk/",
      company: "Arquila",
      location: "Glasgow, UK",
      startDate: "2013-05-13",
      endDate: "2015-02-05",
      highlights: [
        "Worked as part of a small feature development team building business management software for small to medium businesses",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS/TS",
        "jQuery",
        "PHP",
        "MySQL",
        "Server management",
      ],
    },

    {
      title: "Web Developer",
      url: "https://supercontrol.co.uk/",
      company: "SuperControl",
      location: "Glasgow, UK",
      startDate: "2011-12-10",
      endDate: "2013-05-10",
      highlights: [
        "Worked with Classic ASP and PrototypeJS as part of a small feature development team",
        "Built new features and integrations to the existing self-catering management system",
        "Built client websites, often integrated tightly with the SuperControl system",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS/TS",
        "Prototype.js",
        "Classic ASP",
        "Server management",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Resume for Jon Deaves, Web Developer</title>
        <meta
          name="description"
          content="Jon Deaves is a Software Engineer who makes things, usually with code"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResumeLayout>
        <aside>
          <section className={ResumeLayoutStyles.asideHeading}>
            <Header shouldHeaderH1={true} />

            <ul className="unstyled condensed">
              <li>
                <Public fontSize="small" sx={{ fill: "white" }} />
                <ExternalLink href="https://jondeaves.me" label="jondeaves.me" unstyled />
              </li>
              <li>
                <LinkedIn fontSize="small" sx={{ fill: "white" }} />
                <ExternalLink href="https://www.linkedin.com/in/jondeaves/" label="linkedin.com/in/jondeaves" unstyled />
              </li>
              <li>
                <GitHub fontSize="small" sx={{ fill: "white" }} />
                <ExternalLink href="https://github.com/jondeaves" label="github.com/jondeaves" unstyled />
              </li>
            </ul>
          </section>

          <section className={ResumeLayoutStyles.asideContent}>
            <h3 className="spaced-below-xs font-4">Education</h3>
            <ul className="unstyled condensed">
              <li>HNC</li>
              <li>Computing</li>
              <li className={ResumeLayoutStyles.collegeName}>Dumfries & Galloway College</li>
              <li><CalendarMonth fontSize="small" aria-label="Dates" /> August 2007 - May 2008</li>
              <li><Place fontSize="small" aria-label="Location" /> Dumfries, Scotland, UK</li>
            </ul>

            <h3 className="spaced-below-xs font-4 spaced-sm">Skills</h3>
            <ul className="unstyled condensed inline comma">
              <li>A11Y</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Automation</li>
              <li>Project management</li>
              <li>Linux</li>
              <li>Postgres</li>
            </ul>
          </section>
        </aside>

        <main>
          <TagLine />

          <h3>Experience</h3>

          {experienceData.map((experience, idx) => (
            <Fragment key={experience.company}>
              {idx !== 0 && idx % 4 === 0 ? <div className="pagebreak" /> : <></>}
              <ExperienceBlock experience={experience} />
            </Fragment>
          ))}
        </main>

      </ResumeLayout>
    </>
  );
};

export default Resume;
