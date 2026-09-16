import { ExternalLink } from "@/components/ExternalLink";

export const SoftwareSetup = () => (
  <>
    <h3>Software</h3>
    <p>
      These are the programs and tools I regularly use while working on both my
      Mac and PC.
    </p>

    <h4 id="tech">Tech/Dev</h4>
    <ul>
      <li>
        <ExternalLink href="https://www.google.com/chrome/" label="Chrome" />
        <ul>
          <li>My primary browser for development needs</li>
        </ul>
      </li>
      <li>
        <ExternalLink href="https://www.mozilla.org/firefox/" label="Firefox" />
        <ul>
          <li>My primary browser for my non-development needs</li>
        </ul>
      </li>
      <li>
        <ExternalLink href="https://music.youtube.com/" label="YouTube music" />
        <ul>
          <li>
            Everyone needs music in their lives, I&apos;ve jumped between this
            and Spotify quite regularly
          </li>
        </ul>
      </li>
      <li>
        <ExternalLink href="https://zed.dev/" label="Zed" />
        <ul>
          <li>Recently switchedc to this for most coding activities</li>
          <li>I also use it for taking notes in Markdown</li>
          <li>The integrated agent panel is nice and simple to work with</li>
        </ul>
      </li>
    </ul>

    <h4 id="fun">Fun</h4>
    <ul>
      <li>
        <ExternalLink href="https://discord.com/" label="Discord" />
        <ul>
          <li>Chat and video calls, mostly for non-work</li>
        </ul>
      </li>
      <li>
        <ExternalLink href="https://obsproject.com/" label="OBS" />
        <ul>
          <li>
            Sometimes I like to record myself playing games and then decide
            it&apos;s not worth putting on YouTube
          </li>
        </ul>
      </li>
      <li>
        <ExternalLink href="https://unity.com/" label="Unity" />
        <ul>
          <li>
            I&apos;ll never make games as a living, but I love doing it as a
            hobby
          </li>
          <li>Recently been playing with Claude and Unity connected via MCP</li>
        </ul>
      </li>
      <li>
        <ExternalLink
          href="https://store.steampowered.com/about/"
          label="Steam"
        />
        <ul>
          <li>Games, &apos;nuff said</li>
        </ul>
      </li>
    </ul>
  </>
);
