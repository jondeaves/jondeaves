import type { Metadata } from "next";

import { ExternalLink } from "@/components/ExternalLink";

export const metadata: Metadata = {
  title: "Jon Deaves as a point in time",
  description:
    "Jon Deaves is a Web Developer who makes things, usually with code and this is what he is up to now",
};

export default function Now() {
  return (
    <>
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
        <li>Learning to Skate and play ice hockey (at the same time)</li>
        <li>Slowly getting a bit better at Softball</li>
      </ul>

      <h4>Goals</h4>
      <ul>
        <li>Stay active, the sports are a definite mental health booster</li>
        <li>
          Pick the Guitar back up, just recently purchased a cheap one to get
          the feel for it again.
        </li>
      </ul>

      <h3 className="spaced spaced-below-sm">Coding time</h3>
      <ul>
        <li>
          Continuing to work in product focused roles using mostly Typescript;
          React, NestJS, etc.
        </li>
        <li>
          Took part in{" "}
          <ExternalLink
            href="https://globalgamejam.org/"
            label="Global Game Jam 2026"
          />
          <ul>
            <li>
              Built a silly prototype with{" "}
              <ExternalLink href="https://unity.com/" label="Unity" />
            </li>
            <li>
              The game is called{" "}
              <ExternalLink
                href="https://globalgamejam.org/games/2026/stop-clowning-around-6"
                label="Stop Clowning around"
              />
              .
            </li>
          </ul>
        </li>
      </ul>

      <h4>Goals</h4>
      <ul>
        <li>
          Work on some more web development projects to keep up-to-date with the
          ever changing world of development
        </li>
        <li>
          Work on small game prototypes to keep my knowledge of{" "}
          <ExternalLink href="https://unity.com/" label="Unity" /> fresh
        </li>
      </ul>

      <h3 className="spaced spaced-below-sm">Fitness</h3>
      <ul>
        <li>
          Lost the gym that I was a member of for years due to moving country,
          but slowly built up gym equipment at home that I should use more.
        </li>
      </ul>

      <h4>Goals</h4>
      <ul>
        <li>
          Both Hockey and Softball are great for short-distance sprints, but an
          ever-present goal is to be better at longer-distances.
        </li>
      </ul>

      <p className="small spaced">
        This page was last updated on 16th September 2026.
      </p>
    </>
  );
}
