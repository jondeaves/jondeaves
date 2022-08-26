import ExternalLink from "../ExternalLink";
import FooterStyles from "./Footer.module.css";

const Footer = () => {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/jondeaves",
    },
    {
      label: "GitHub",
      href: "https://github.com/jondeaves",
    },
    {
      label: "npm",
      href: "https://npmjs.com/~jondeave",
    },
  ];

  return (
    <footer className={FooterStyles.footer}>
      <p id="social-intro" className="hidden">
        Though I&apos;m not very social on the internet you can find me at;
      </p>

      <ul className="inline" aria-describedby="social-intro">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <ExternalLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>

      <p className="spaced-sm">
        Site built by Jon Deaves using{" "}
        <ExternalLink href="https://nextjs.org/" label="NextJS" />
      </p>
    </footer>
  );
};

export default Footer;
