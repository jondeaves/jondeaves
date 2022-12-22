import type { NextPage } from "next";
import Head from "next/head";
import Accordion from "../components/Accordion";
import ExperienceBlock from "../components/ExperienceBlock";
import Grid from "../components/Grid";
import GridItem from "../components/Grid/GridItem";
import Layout from "../components/Layout";
import { Experience } from "../shared/types/Experience";

const Resume: NextPage = () => {
  const experienceData: Experience[] = [
    {
      title: "Software Engineer",
      url: "https://webflow.com/",
      company: "Webflow",
      startDate: "2021-09-01",
      highlights: [
        "Working mainly with React and CSS-in-JS supported by Jest, Cypress and BuildKite",
        "My work has focused on the Audit panel and default element accessibility, which will allow users to ensure the sites they build can meet various accessibility requirements.",
        "As part of the Productivity team, my work on automating our accessibility testing is helping to educate our engineers on building accessible by default.",
      ],
    },
    {
      title: "Senior Software Engineer",
      url: "https://www.fanduel.com/",
      company: "FanDuel",
      startDate: "2018-05-22",
      endDate: "2021-08-24",
      highlights: [
        "Working mainly with React, Redux and CSS-in-JS supported by Jest, Cypress and BuildKite",
        "Working as part of a scrum team to build and maintain Deposit and Withdrawal pages",
        "Lead a team of engineers, from Intern to Lead Engineer, working across the account and wallet screens",
      ],
    },

    {
      title: "UI Developer",
      url: "https://deepmatter.io/",
      company: "DeepMatter",
      startDate: "2018-01-08",
      endDate: "2018-05-18",
      highlights: [
        "Working with React as part of a multi-disciplined scrum team",
        "Took ownership of improvements to code quality and consistency for the web team",
        "Created and maintained the CI pipelines for web and backend",
      ],
    },

    {
      title: "UI Developer",
      url: "https://www.cgi.com/",
      company: "CGI UK",
      startDate: "2016-01-25",
      endDate: "2018-01-05",
      highlights: [
        "Working with HTML, CSS, NodeJS and Handlebars as part of a multi-disciplined scrum team",
        "Developing the online jury response system for England and Wales ensuring strict adherence to the GDS Guidelines while using the publicly available design system",
        "Developing a detailed suite of end-to-end tests which made use of Cucumber to translate business requirements into test steps",
      ],
    },

    {
      title: "Web Developer",
      url: "https://www.weareeveryone.com/",
      company: "Everyone",
      startDate: "2015-02-16",
      endDate: "2016-01-22",
      highlights: [
        "Working with HTML, CSS, jQuery, PHP and MySQL",
        "Develop and maintain client websites",
        "Work closely with the design team to implement pixel-perfect, modern and performant web experiences",
      ],
    },

    {
      title: "Web Developer",
      url: "https://www.binarytechnologies.co.uk/",
      company: "Arquila",
      note: "Company was renamed to Binary Technologies sometime after my departure",
      startDate: "2013-05-13",
      endDate: "2015-02-05",
      highlights: [
        "Working with HTML, CSS, jQuery, PHP and MySQL",
        "Work as part of a small feature development team on the main system",
      ],
    },

    {
      title: "Web Developer",
      url: "https://supercontrol.co.uk/",
      company: "SuperControl",
      startDate: "2011-12-10",
      endDate: "2013-05-10",
      highlights: [
        "Working with Classic ASP and PrototypeJS as part of a small feature development team",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Resume for Jon Deaves, Software Developer</title>
        <meta
          name="description"
          content="Jon Deaves is a Software Engineer who makes things, usually with code"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout shouldHeaderH1={true}>
        <p className="lead">
          I&apos;m an experienced developer specialising in interactive web
          applications and I take pride in creating modern, responsive and
          progressive user experiences.
        </p>

        <h3>Recent experience</h3>

        {experienceData.slice(0, 2).map((experience, idx) => (
          <ExperienceBlock key={idx} experience={experience} />
        ))}

        {experienceData.length > 2 && (
          <p className="small">
            <a href="#further-experience">
              ** Further experience is continued below.
            </a>
          </p>
        )}

        <h3 className="spaced">Core skills</h3>
        <ul className="inline slashed">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>TS</li>
          <li>NodeJS</li>
          <li>React</li>
        </ul>

        <h3 className="spaced">Learning</h3>
        <p>
          These are technologies or skills that I work with in my own time and
          therefore likely don&apos;t have commercial experience with.
        </p>
        <Grid>
          <GridItem>
            <h4>NextJS</h4>
            <p>
              I&apos;m currently learning the NextJS framework through several
              projects; including a re-write of my personal page.
            </p>
          </GridItem>

          <GridItem>
            <h4>Flutter</h4>
            <p>
              I have built several Flutter apps as learning experiences,
              including an app to organize Table Tennis leagues.
            </p>
          </GridItem>
        </Grid>

        {experienceData.length > 2 && (
          <>
            <div className="pagebreak" />
            <Accordion summary="Further experience" tag="further-experience">
              {experienceData
                .slice(2, experienceData.length)
                .map((experience, idx) => (
                  <ExperienceBlock key={idx} experience={experience} />
                ))}
            </Accordion>
          </>
        )}
      </Layout>
    </>
  );
};

export default Resume;
