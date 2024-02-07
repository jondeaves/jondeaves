import { ExternalLink } from "@/components/ExternalLink";

export const TechnologySetup = () => (
  <>
    <h3>Technologies</h3>
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
        <ExternalLink href="https://proton.me/" label="Proton" />
        <ul>
          <li>
            Proton Mail and VPN are privacy-focused alternatives and have served
            me well
          </li>
          <li>
            I have this idea in my head of moving away from Google, it&apos;s a
            process
          </li>
        </ul>
      </li>
    </ul>
  </>
);
