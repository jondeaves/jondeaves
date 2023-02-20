import Accordion from "../../../components/Accordion";
import ExternalLink from "../../../components/ExternalLink";

const TechnologySetup = () => {
  return (
    <Accordion summary="Technologies" tag="technologies">
      <p>
        Some of the services and other resources I make use of that are not
        strictly software packages.
      </p>

      <ul>
        <li>
          <ExternalLink href="https://www.gandi.net/" label="Gandi" />
          <ul>
            <li>Domain registration and associated email accounts</li>
          </ul>
        </li>
        <li>
          <ExternalLink
            href="https://www.google.com/gmail/about/"
            label="Google Mail"
          />
          <ul>
            <li>Personal and work mail</li>
          </ul>
        </li>
        <li>
          <ExternalLink href="https://cronitor.io" label="Cronitor" />
          <ul>
            <li>Provides lightweight website analytics</li>
            <li>Much more privacy and security-focused</li>
            <li>
              No cookies, they don&apos;t track beyond the site it&apos;s used
              on, etc.
            </li>
          </ul>
        </li>
        <li>
          <ExternalLink href="https://proton.me/" label="Proton" />
          <ul>
            <li>
              Proton Mail and VPN are privacy-focused alternatives and have
              served me well
            </li>
            <li>
              I have this idea in my head of moving away from Google for
              personal, it&apos;s a process
            </li>
          </ul>
        </li>
      </ul>
    </Accordion>
  );
};

export default TechnologySetup;
