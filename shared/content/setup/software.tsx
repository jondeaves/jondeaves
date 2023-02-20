import Accordion from "../../../components/Accordion";
import ExternalLink from "../../../components/ExternalLink";

const SoftwareSetup = () => {
  return (
    <Accordion summary="Software" tag="software">
      <p>
        These are the programs and tools I regularly use while working on both
        my Mac and PC.
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
          <ExternalLink
            href="https://www.mozilla.org/firefox/"
            label="Firefox"
          />
          <ul>
            <li>My primary browser for my non-development needs</li>
          </ul>
        </li>
        <li>
          <ExternalLink href="https://www.gitkraken.com/" label="GitKraken" />
          <ul>
            <li>A great UI for Git interactions</li>
            <li>
              I only really use it if there is something a little more involved
              with conflict resolutions or I&apos;ve forgotten the name of a
              branch
            </li>
          </ul>
        </li>
        <li>
          <ExternalLink
            href="https://www.adobe.com/ca/products/photoshop.html"
            label="Photoshop"
          />
          <ul>
            <li>Mostly used for simple image editing, resizing, etc</li>
          </ul>
        </li>
        <li>
          <ExternalLink href="https://www.postman.com/" label="Postman" />
          <ul>
            <li>This is a great app for working with REST APIs</li>
            <li>You can save specific requests to re-run</li>
          </ul>
        </li>
        <li>
          <ExternalLink href="https://spotify.com/" label="Spotify" />
          <ul>
            <li>
              Everyone needs music in their lives, I chose this one after Google
              play music died a fiery death
            </li>
            <li>
              Fun story; When Google Play Music was being fazed out for YouTube
              music, there was a bug where songs released after the new year
              wouldn&apos;t play
            </li>
          </ul>
        </li>
        <li>
          <ExternalLink
            href="https://code.visualstudio.com/"
            label="Visual Studio Code"
          />
          <ul>
            <li>This is my go-to for most coding activities</li>
            <li>I also use it for taking notes in Markdown</li>
            <li>
              Doesn&apos;t play well with{" "}
              <ExternalLink href="https://unity.com/" label="Unity" /> anymore
            </li>
          </ul>
        </li>
        <li>
          <ExternalLink href="https://zoom.us/" label="Zoom" />
          <ul>
            <li>
              Pretty much the standard for video calls now
            </li>
          </ul>
        </li>
      </ul>
      <h4 id="fun">Fun</h4>
      <ul>
        <li>
          <ExternalLink href="https://discord.com/" label="Discord" />
          <ul>
            <li>Chat and video calls</li>
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
            <li>
              I used to be adamant that I would stick with XNA/MonoGame and that
              Unity was &quot;cheating&quot;, how opinions change in a decade
            </li>
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
      <h4 id="misc">Misc</h4>
      <ul>
        <li>
          <ExternalLink
            href="https://mango3d.io/lychee-slicer-for-sla-3d-printers/"
            label="Lychee Slicer"
          />
          <ul>
            <li>
              I got my wife a 3D printer as an engagement gift, this program is
              a nice and simple way of making sure the 3D files are suitable for
              our printer
            </li>
          </ul>
        </li>
      </ul>
    </Accordion>
  );
};

export default SoftwareSetup;
