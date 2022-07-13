import FooterStyles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <p id="social-intro" className="hidden">
        Though I&apos;m not very social on the internet you can find me at;
      </p>

      <ul aria-describedby="social-intro">
        <li>
          <a href="https://linkedin.com/in/jondeaves" rel="external">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/jondeaves" rel="external">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://npmjs.com/~jondeaves" rel="external">
            npm
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
