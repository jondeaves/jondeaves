import type { NextPage } from "next";
import Head from "next/head";
import ExternalLink from "../components/ExternalLink";
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
        <h1 className="inline">Now</h1>
        <p className="small spaced-left-sm inline">
          as in{" "}
          <ExternalLink href="https://nownownow.com/about" label="nownownow" />
        </p>

        <p className="lead">
          This is me within a point in time, as best I can summarise myself.
        </p>

        <h3 className="spaced-below-sm">Me time</h3>
        <h4>Achievements</h4>
        <ul>
          <li>In October 2022 I married my now wife</li>
          <li>
            In November 2022 my family and I moved to Ontario, Canada
            <ul>
              <li>
                Moving was very stressful and not quite finished as we await our
                shipment of belongings
              </li>
              <li>
                We are near Toronto and enjoying the chance to explore new
                areas, visiting small towns most weekends
              </li>
            </ul>
          </li>
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
              <li>Wasn&apos;t quite ready before leaving the UK</li>
              <li>
                I have my learner&apos;s permit <small>(G1 in Ontario)</small>{" "}
                and working through the approved training materials in our new
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
            <ExternalLink href="https://webflow.com" label="Webflow" />
          </li>
          <li>Continuing to focus on React for my day-to-day</li>
          <li>
            Preparing for{" "}
            <ExternalLink
              href="https://globalgamejam.org/"
              label="Global Game Jam"
            />{" "}
            by refreshing my knowledge on{" "}
            <ExternalLink href="https://unity.com/" label="Unity" />
          </li>
          <li>Launched my new website, built with NextJS</li>
        </ul>

        <h4>Goals</h4>
        <ul>
          <li>
            Get back to working with{" "}
            <ExternalLink href="https://flutter.dev/" label="Flutter" /> for
            hobby projects and learning{" "}
            <ExternalLink href="https://www.rust-lang.org/" label="Rust" />
          </li>
          <li>
            Work on small game prototypes to keep my knowledge of Unity fresh
          </li>
        </ul>

        <h3 className="spaced spaced-below-sm">Fitness</h3>
        <h4>Achievements</h4>
        <ul>
          <li>
            Lost the gym that I was a member of for years due to the move, but
            gained a gym in my apartment building
          </li>
          <li>
            Instead of 1:1 training, I get 3 days&apos; worth of workouts to do
            in the week from my PT
          </li>
        </ul>

        <h4>Goals</h4>
        <ul>
          <li>Get comfortable with the new routine</li>
          <li>
            Start walking further, or take the dog to a bigger park for exercise
          </li>
          <li>
            Decide on a hobby sport, my current thinking;
            <ul>
              <li>Could go back to Rollerderby</li>
              <li>Could stick to regular roller-skating at rinks</li>
              <li>Join an Archery club</li>
              <li>More regular bouldering sessions</li>
            </ul>
          </li>
        </ul>

        <p className="small spaced">
          This page was last updated on 21st December 2022.
        </p>
      </Layout>
    </>
  );
};

export default Now;
