import Link from "next/link";

import { PageLayout } from "@/components/PageLayout";
import { TagLine } from "@/components/TagLine";
import { ExternalLink } from "@/components/ExternalLink";

export default function Home() {
  return (
    <PageLayout isHomepage={true} isH1={true}>
      <TagLine />

      <p>
        I try to keep things light and easy by not relying too much on fancy
        graphics, animations or interactivity in my corner of the web. This
        speaks to what I find frustrating with a lot of modern sites that have
        to be constantly sharing content, showing adverts and otherwise
        bombarding your senses in the pursuit of clicks, impressions and money.
      </p>

      <h3 className="spaced">Things to read</h3>

      <ul className="unstyled">
        {/* <li>
          My main pursuit is{" "}
          <strong>
            <Link href="/web-dev">web development</Link>
          </strong>
        </li>
        <li>
          My eternal hobby is{" "}
          <strong>
            <Link href="/game-dev">game development</Link>
          </strong>
        </li> */}
        <li>
          My non-exhaustive history is contained in my{" "}
          <strong>
            <ExternalLink href="/resume.pdf" label="resume" />
          </strong>
        </li>
        <li>
          My{" "}
          <strong>
            <Link href="/setup">setup</Link>
          </strong>{" "}
          page is what I use
        </li>
        <li>
          My{" "}
          <strong>
            <Link href="/now">now</Link>
          </strong>{" "}
          page is what I am doing
        </li>
      </ul>
    </PageLayout>
  );
}
