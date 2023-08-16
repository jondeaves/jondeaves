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
          content="Jon Deaves is a Software Developer who makes things, usually with code and this is what he is up to now"
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
        <ul>
          <li>In October 2022, I married my now wife</li>
          <li>In November 2022, my family and I moved to Ontario, Canada</li>
          <li>In March 2023, I finally passed my driving test after 16 years</li>
        </ul>

        <h4>Goals</h4>
        <ul>
          <li>
            Health & wellness has taken a bit of a back seat in favour of the
            move, so need to re-focus on that
          </li>
          <li>
            Settle on a more permanent place to live
            <ul>
              <li>
                We got a rental property in a great location but at a higher cost,
                thinking of it as a treat to enjoy our new country
              </li>
              <li>
                Many of our road trips serve as chances to explore areas to see if
                they would be nice places to settle down
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="spaced spaced-below-sm">Coding time</h3>
        <ul>
          <li>
            Unfortunately, I had to finish employment with{" "}
            <ExternalLink href="https://webflow.com" label="Webflow" />. They were fantastic in supporting my move to
            Canada but could only offer a 90-day period where I could work for them without returning to the UK
          </li>
          <li>
            Took part in{" "}
            <ExternalLink
              href="https://globalgamejam.org/"
              label="Global Game Jam 2023"
            />

            <ul>
              <li>Built a silly prototype with <ExternalLink href="https://unity.com/" label="Unity" /></li>
              <li>
                The game is called <ExternalLink href="https://globalgamejam.org/2023/games/couch-potato-1" label="Couch Potato" />
                and is based on <ExternalLink href="https://taskmaster.fandom.com/wiki/Get_this_potato_into_the_golf_hole" label="this segment of the show Taskmaster" />
              </li>
              <li>Essentially you have to throw a Potato into a small hole, the fastest wins</li>
            </ul>
          </li>
          <li>
            Continued my journey into <ExternalLink href="https://flutter.dev/" label="Flutter" /> development
            <ul>
              <li>
                The project is called Pongstars and has been an on-and-off way of learning Flutter for several years
              </li>
              <li>
                The app aims to provide a method of tracking and recording Elo rankings for table-tennis leagues
              </li>
              <li>
                <ExternalLink href="https://supabase.com" label="Supabase" /> for Authentication, Postgres and Edge
                functions. Includes the ability to subscribe to changes in the database for real-time updates
              </li>
              <li>
                <ExternalLink href="https://firebase.google.com/" label="Firebase" /> for Push notifications
              </li>
            </ul>
          </li>
        </ul>

        <h4>Goals</h4>
        <ul>
          <li>
            Work on small game prototypes to keep my knowledge of <ExternalLink href="https://unity.com/" label="Unity" /> fresh
          </li>
        </ul>

        <h3 className="spaced spaced-below-sm">Fitness</h3>
        <ul>
          <li>
            Lost the gym that I was a member of for years due to the move, but
            gained a gym in my apartment building
          </li>
          <li>
            Went for my first run in a long-time and impressed myself with a distance of 3km at a pace of 5m30s per km.
          </li>
        </ul>

        <h4>Goals</h4>
        <ul>
          <li>
            Decide on some hobbies, my options are;
            <ul>
              <li>Could go back to Rollerderby, I have purchased new safety equipment in preparation for this</li>
              <li>Could stick to regular roller-skating at rinks</li>
              <li>Join an Archery club</li>
              <li>More regular bouldering sessions</li>
              <li>Learn to ice skate, I did pick up a basic pair that I can use in the upcoming winter</li>
            </ul>
          </li>
        </ul>

        <p className="small spaced">
          This page was last updated on 16th August 2023.
        </p>
      </Layout>
    </>
  );
};

export default Now;
