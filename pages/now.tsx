import type { NextPage } from "next";
import Head from "next/head";
import Grid from "../components/Grid";
import GridItem from "../components/Grid/GridItem";
import Layout from "../components/Layout";

const Now: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jon Deaves as a point in time</title>
        <meta
          name="description"
          content="Jon Deaves is a Software Engineer who makes things, usually with code and this is what he is up to now"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <p className="lead">
          This is me within a point in time, as best I can summarise myself.
        </p>

        <h3 className="spaced-below-sm">Me time</h3>
        <h4>Achievements</h4>
        <ul>
          <li>
            In November 2022 my family <small>(Myself, Wife and Dog)</small> and
            I moved to Ontario, Canada
            <ul>
              <li>
                Moving was very stressful and not quite finished as we await our
                shipment of belongings
              </li>
              <li>
                We are near Toronto but have only gone to the city one time so
                far
              </li>
              <li>
                Trying to spend most of our weekends exploring the area and
                small towns nearby
              </li>
            </ul>
          </li>
          <li>Got married in October of 2022</li>
        </ul>

        <h4>Goals</h4>
        <ul>
          <li>
            Health & wellness has taken a bit of a back seat in favour of the
            move, so need to re-focus on that
          </li>
          <li>
            Still learning to drive
            <ul>
              <li>Wasn&apos;t quite ready before leaving UK</li>
              <li>
                I have my learners permit <small>(G1 in Ontario)</small> and
                working through the approved training materials in our new
                country.
              </li>
              <li>
                <small>(Small win)</small> Drove home from picking up pizza and
                parked in underground parking with limited input from my wife
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="spaced spaced-below-sm">Coding time</h3>
        <h4>Achievements</h4>
        <ul>
          <li>
            Passed my one-year mark with{" "}
            <a
              href="https://webflow.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Webflow
            </a>
          </li>
          <li>Continuing to focus on React for my day-to-day</li>
          <li>
            Preparing for{" "}
            <a
              href="https://globalgamejam.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Global Game Jam
            </a>{" "}
            by refreshing my knowledge on{" "}
            <a
              href="https://unity.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Unity
            </a>
          </li>
        </ul>

        <h4>Goals</h4>
        <ul>
          <li>
            Get back to working with{" "}
            <a
              href="https://flutter.dev/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Flutter
            </a>{" "}
            for hobby projects
          </li>
          <li>
            Get back to learning{" "}
            <a
              href="https://www.rust-lang.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Rust
            </a>
          </li>
          <li>
            Launch my new website
            <ul>
              <li>
                I wrote this Now page while it was still under-development
              </li>
              <li>
                I&apos;m struggling to decide what content I want on the
                front-page/what the sites purpose is
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="spaced spaced-below-sm">Fitness</h3>
        <h4>Achievements</h4>
        <ul>
          <li>
            Lost my home gym that I was a member of for years, but gained a gym
            in my apartment building
          </li>
          <li>
            Instead of 1:1 training, I get 3 days worth of workouts to do in the
            week from my PT
          </li>
        </ul>

        <h4>Goals</h4>
        <ul>
          <li>Get comfortable with the new routine</li>
          <li>
            Start walking further, or taking the dog to a bigger park for
            exercise
          </li>
          <li>
            Decide on a hobby sport, current thinkings;
            <ul>
              <li>Could go back to Rollerderby</li>
              <li>Could stick to regular roller-skating at rinks</li>
              <li>Join an Archery club</li>
            </ul>
          </li>
        </ul>

        <p className="small spaced">
          Based on, and inspired by,{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noreferrer noopener"
          >
            nownownow
          </a>
          . This page was last updated on 19th December 2022.
        </p>
      </Layout>
    </>
  );
};

export default Now;
