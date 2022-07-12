type HeaderProps = {
  isHomepage?: boolean;
};

const Header = ({ isHomepage }: HeaderProps) => {
  return (
    <header>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <small className={isHomepage ? "" : "hidden"} aria-hidden="true">
        Welcome, I&apos;m
      </small>
      <h1>Jon Deaves</h1>
      <small className={isHomepage ? "" : "hidden"} aria-hidden="true">
        a&nbsp;
      </small>
      <h2>Software Engineer</h2>
      <h3>
        <a href="https://webflow.com/" rel="external">
          @Webflow
        </a>
      </h3>
    </header>
  );
};

export default Header;
