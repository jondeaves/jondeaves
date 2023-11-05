import type { NextPage } from "next";
import Head from "next/head";
// import ExperienceBlock from "../components/ExperienceBlock";
// import Grid from "../components/Grid";
// import GridItem from "../components/Grid/GridItem";
import TagLine from "../components/TagLine";
import ExternalLink from "../components/ExternalLink";
import ResumeLayout from "../components/ResumeLayout";
import Header from "../components/Header";

import ResumeLayoutStyles from "../components/ResumeLayout/ResumeLayout.module.css";

const Resume: NextPage = () => {
  // const experienceData: Experience[] = [
  //   {
  //     titles: [
  //       {
  //         title: "Senior Software Engineer",
  //         startDate: "2018-05-22",
  //         endDate: "2021-08-24",
  //       },
  //     ],
  //     title: "Senior Software Engineer",
  //     url: "https://www.fanduel.com/",
  //     company: "FanDuel",
  //     startDate: "2018-05-22",
  //     endDate: "2021-08-24",
  //     highlights: [
  //       "Worked mainly with React, Redux and CSS-in-JS supported by Jest, Cypress and BuildKite",
  //       "Worked as part of a scrum team to build and maintain Deposit and Withdrawal pages",
  //       "Led a team of engineers, from intern to lead engineer, who worked across the account and wallet screens",
  //     ],
  //   },
  //   // {
  //   //   title: "Software Engineer",
  //   //   url: "https://webflow.com/",
  //   //   company: "Webflow",
  //   //   startDate: "2021-09-01",
  //   //   endDate: "2023-02-07",
  //   //   highlights: [
  //   //     "Worked mainly with React and CSS-in-JS supported by Jest, Cypress and BuildKite",
  //   //     "My work initially focused on the Audit panel and default element accessibility, which helps users ensure the sites they build can meet various accessibility requirements",
  //   //     "As part of the Productivity team, my work on automating our accessibility testing helped educate engineers on building accessible by default",
  //   //     "I also had the opportunity to assist the design system team. Helping to build and update design system components with a particular focus on accessibility",
  //   //   ],
  //   // },
  //   // {
  //   //   title: "Senior Software Engineer",
  //   //   url: "https://www.fanduel.com/",
  //   //   company: "FanDuel",
  //   //   startDate: "2018-05-22",
  //   //   endDate: "2021-08-24",
  //   //   highlights: [
  //   //     "Worked mainly with React, Redux and CSS-in-JS supported by Jest, Cypress and BuildKite",
  //   //     "Worked as part of a scrum team to build and maintain Deposit and Withdrawal pages",
  //   //     "Led a team of engineers, from intern to lead engineer, who worked across the account and wallet screens",
  //   //   ],
  //   // },

  //   // {
  //   //   title: "UI Developer",
  //   //   url: "https://deepmatter.io/",
  //   //   company: "DeepMatter",
  //   //   startDate: "2018-01-08",
  //   //   endDate: "2018-05-18",
  //   //   highlights: [
  //   //     "Worked with React as part of a multi-disciplined scrum team",
  //   //     "Took ownership of improvements to code quality and consistency for the web team",
  //   //     "Created and maintained the CI pipelines for web and backend",
  //   //   ],
  //   // },

  //   // {
  //   //   title: "UI Developer",
  //   //   url: "https://www.cgi.com/",
  //   //   company: "CGI UK",
  //   //   startDate: "2016-01-25",
  //   //   endDate: "2018-01-05",
  //   //   highlights: [
  //   //     "Worked with HTML, CSS, NodeJS and Handlebars as part of a multi-disciplined scrum team",
  //   //     "Developed the online jury response system for England and Wales ensuring strict adherence to the GDS Guidelines while using the publicly available design system",
  //   //     "Developed a detailed suite of end-to-end tests which made use of Cucumber to translate business requirements into test steps",
  //   //   ],
  //   // },

  //   // {
  //   //   title: "Web Developer",
  //   //   url: "https://www.weareeveryone.com/",
  //   //   company: "Everyone",
  //   //   startDate: "2015-02-16",
  //   //   endDate: "2016-01-22",
  //   //   highlights: [
  //   //     "Worked with HTML, CSS, jQuery, PHP and MySQL",
  //   //     "Develop and maintain client websites",
  //   //     "Worked closely with the design team to implement pixel-perfect, modern and performant web experiences",
  //   //   ],
  //   // },

  //   // {
  //   //   title: "Web Developer",
  //   //   url: "https://www.binarytechnologies.co.uk/",
  //   //   company: "Arquila",
  //   //   note: "Company was renamed Binary Technologies sometime after my departure",
  //   //   startDate: "2013-05-13",
  //   //   endDate: "2015-02-05",
  //   //   highlights: [
  //   //     "Worked with HTML, CSS, jQuery, PHP and MySQL",
  //   //     "Worked as part of a small feature development team building business management software for small to medium businesses",
  //   //   ],
  //   // },

  //   // {
  //   //   title: "Web Developer",
  //   //   url: "https://supercontrol.co.uk/",
  //   //   company: "SuperControl",
  //   //   startDate: "2011-12-10",
  //   //   endDate: "2013-05-10",
  //   //   highlights: [
  //   //     "Worked with Classic ASP and PrototypeJS as part of a small feature development team",
  //   //     "Built new features and integrations to the existing self-catering management system",
  //   //     "Built client websites, often integrated tightly with the SuperControl system",
  //   //   ],
  //   // },
  // ];

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

            <ul className="unstyled">
              <li><ExternalLink href="https://jondeaves.me" label="jondeaves.me" /></li>
              <li><ExternalLink href="https://www.linkedin.com/in/jondeaves/" label="linkedin.com/in/jondeaves/" /></li>
              <li><ExternalLink href="https://github.com/jondeaves" label="github.com/jondeaves" /></li>
            </ul>
          </section>

          <section className={ResumeLayoutStyles.asideContent}>
            test
          </section>

          {/*
          <h3 className="spaced-below-xs font-4">Education</h3>
          <ul className="unstyled condensed">
            <li>HNC</li>
            <li>Computing</li>
            <li>Dumfries & Galloway College</li>
            <li>August 2007 - May 2008</li>
            <li>Dumfries, Scotland, UK</li>
          </ul>

          <h3 className="spaced-below-xs font-4">Skills</h3>
          <ul className="unstyled condensed">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>React</li>
          </ul> */}

          {/* <h3 className="spaced-below-xs font-4">Learning</h3>
          <p>
            These are technologies or skills that I work with in my own time and
            therefore likely don&apos;t have commercial experience with.
          </p>

          <Grid>
            <GridItem>
              <h4>NextJS</h4>
              <p>
                I&apos;m currently learning the NextJS framework through several
                projects; including a re-write of my website.
              </p>
            </GridItem>

            <GridItem>
              <h4>Flutter</h4>
              <p>
                I have built several Flutter apps as learning experiences,
                including an app to organize Table Tennis leagues.
              </p>
            </GridItem>
          </Grid> */}
        </aside>

        <main>
          <TagLine />

          {/* <h3>Recent experience</h3>

          {experienceData.slice(0, 2).map((experience, idx) => (
            <ExperienceBlock key={idx} experience={experience} />
          ))} */}
        </main>

      </ResumeLayout>
    </>
  );
};

export default Resume;
