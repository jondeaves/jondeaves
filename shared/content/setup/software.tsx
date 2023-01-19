import Accordion from "../../../components/Accordion";

const SoftwareSetup = () => {
  return (
    <Accordion summary="Software" tag="software">
      <p>
        These are the programs and tools I regularly use while working on both
        my Mac and PC.
      </p>

      <h4 id="work">Work</h4>
      <ul>
        <li>
          Alfred
          <ul>
            <li>
              This is a quick launcher for Mac that is very powerful and can be
              customized immensely.
            </li>
            <li>I use it to quickly launch programs and nothing else</li>
          </ul>
        </li>
        <li>
          Chrome
          <ul>
            <li>My primary browser for work and development needs</li>
          </ul>
        </li>
        <li>
          Firefox
          <ul>
            <li>My primary browser for my personal PC</li>
          </ul>
        </li>
        <li>
          GitKraken
          <ul>
            <li>
              A great UI for Git interactions, I only really use it if there is
              something a little more involved with conflict resolutions or the
              likes
            </li>
          </ul>
        </li>
        <li>
          GMail
          <ul>
            <li>Personal and work mail</li>
          </ul>
        </li>
        <li>
          iTerm
          <ul>
            <li>A simple little &apos;pop-up&apos; terminal for my Mac</li>
            <li>Opens/closes on key command</li>
          </ul>
        </li>
        <li>
          Kap
          <ul>
            <li>
              I use this to capture quick videos of my desktop, mostly to
              include in pull requests
            </li>
          </ul>
        </li>
        <li>
          Photoshop
          <ul>
            <li>Mostly used for simple image editing, resizing, etc</li>
          </ul>
        </li>
        <li>
          Postman
          <ul>
            <li>This is a great app for working with REST APIs</li>
            <li>You can save specific requests to re-run</li>
          </ul>
        </li>
        <li>
          Proton (Mail + VPN)
          <ul>
            <li>
              Proton Mail and VPN are privacy focused alternatives and have
              served me well
            </li>
            <li>
              I have this idea in my head of moving away from GMail for personal
              things
            </li>
          </ul>
        </li>
        <li>
          Spotify
          <ul>
            <li>
              Everyone needs music in their lives, I chose this one after Google
              play music died a fiery death
            </li>
            <li>
              Fun story; When Google Play Music was being fazed out for YouTube
              music, there was a fun bug where songs released after the new year
              wouldn&apos;t play
            </li>
          </ul>
        </li>
        <li>
          Visual Studio Code
          <ul>
            <li>This is my go-to for most coding activities</li>
            <li>I also use it for taking notes in Markdown</li>
            <li>Doesn&apos;t play well with Unit anymore</li>
          </ul>
        </li>
        <li>
          Zoom
          <ul>
            <li>
              Pretty much the standard for video calls now, but pretty much only
              for work
            </li>
          </ul>
        </li>
      </ul>
      <h4 id="fun">Fun</h4>
      <ul>
        <li>
          Discord
          <ul>
            <li>Non-work related chat and video calls</li>
          </ul>
        </li>
        <li>
          OBS
          <ul>
            <li>
              Sometimes I like to record myself playing games and then decide
              it&apos;s not worth putting on YouTube
            </li>
          </ul>
        </li>
        <li>
          Unity
          <ul>
            <li>
              I&apos;ll never make games as a living, but I definitely love
              doing it as a hobby
            </li>
            <li>
              I used to be adament that I would stick with XNA/MonoGame and that
              Unity was &quote;cheating&quote;, how opinions change in a decade.
            </li>
          </ul>
        </li>
        <li>
          Steam
          <ul>
            <li>Games, &apos;nuff said</li>
          </ul>
        </li>
      </ul>
      <h4 id="personal">Personal</h4>
      <ul>
        <li>
          Lychee Slicer
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
