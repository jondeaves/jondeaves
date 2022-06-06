const Header = () => {
  return (
    <header>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <small aria-hidden="true">Welcome, I&apos;m</small>
      <h1>Jon Deaves</h1>
      <small aria-hidden="true">a</small>
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
