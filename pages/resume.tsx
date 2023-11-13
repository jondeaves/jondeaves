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
        "Worked with fellow A11Y colleagues to enhance accessibility in the Audit panel and default element accessibility, resulting in improved user experience",
        "Led the team's work to automate accessibility testing, fostering a culture of accessibility-first development. A strong focus on documentation and communication with many other teams were key to the success of the project",
        "Collaborated with the design system team to build and update components with a strong focus on accessibility",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS/TS",
        "React",
        "Next.js",
        "Jest",
        "Cypress",
        "Axe-core",
        "BuildKite",
        "Docker",
        "Jira",
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
        "Worked within a scrum team to build and maintain Deposit and Withdrawal pages",
        "Led a team of front-end engineers, working across the account and wallet screens",
        "Collaborated with Designers, Product Owners, and Business Analysts to ensure project success",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS/TS",
        "React",
        "Redux",
        "Jest",
        "Cypress",
        "Fela",
        "Node.js",
        "BuildKite",
        "Storybook",
        "Jira",
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
        "Took ownership of code quality through the creation of automation pipelines, ensuring consistent and high-quality code across the web and back-end teams",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Jenkins",
        "Docker",
        "Bootstrap",
        "Jira",
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
        "Developed the online jury response system for England and Wales, ensuring strict adherence to the GDS Guidelines and utilizing a publicly available design system",
        "Created a detailed suite of end-to-end tests to translate business requirements into test steps",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "Angular",
        "Bootstrap",
        "Node.js",
        "Handlebars",
        "Linux servers",
        "Jira",
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
        "Developed and maintained client websites, specializing in E-Commerce solutions",
        "Collaborated closely with the design team to ensure pixel-perfect, modern, and high-performing web experiences",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "jQuery",
        "PHP",
        "MySQL",
        "E-Commerce",
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
        "Played a key role in developing business management software for small to medium businesses",
        "Successfully translated paper-based workflows into efficient digital solutions, leading to increased productivity and revenue",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "jQuery",
        "PHP",
        "MySQL",
        "Linux servers",
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
        "Developed new features and integrations for self-catering management systems",
        "Developed client websites, often tightly integrated with SuperControl, enhancing the overall user experience",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "Prototype.js",
        "Classic ASP",
        "Windows servers",
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
              <li className="flexed">
                <Public fontSize="small" sx={{ fill: "white" }} />
                <ExternalLink href="https://jondeaves.me" label="jondeaves.me" unstyled />
              </li>
              <li className="flexed">
                <LinkedIn fontSize="small" sx={{ fill: "white" }} />
                <ExternalLink href="https://www.linkedin.com/in/jondeaves/" label="linkedin.com/in/jondeaves" unstyled />
              </li>
              <li className="flexed">
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
            <h4 className="font-5-5 spaced-below-xs spaced-sm">Languages</h4>
            <ul className="unstyled condensed">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>Dart</li>
            </ul>

            <h4 className="font-5-5 spaced-below-xs spaced-sm">Frameworks</h4>
            <ul className="unstyled condensed">
              <li>Node.js</li>
              <li>Laravel</li>
              <li>Flutter</li>
            </ul>

            <h4 className="font-5-5 spaced-below-xs spaced-sm">Libraries</h4>
            <ul className="unstyled condensed">
              <li>React</li>
              <li>Jest</li>
              <li>Cypress</li>
              <li>Next.js</li>
              <li>jQuery</li>
            </ul>

            <h4 className="font-5-5 spaced-below-xs spaced-sm">Tools</h4>
            <ul className="unstyled condensed">
              <li>BuildKite</li>
              <li>Firebase</li>
              <li>Jira</li>
              <li>Linux</li>
              <li>Postgres</li>
              <li>Vercel</li>
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
