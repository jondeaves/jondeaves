import HeaderStyles from "./Header.module.css";

type HeaderProps = {
  isHomepage?: boolean;
};

const Header = ({ isHomepage }: HeaderProps) => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.inner}>
        <p
          className={`no-margin ${
            isHomepage ? "inline spaced-right" : "hidden"
          }`}
          aria-hidden="true"
        >
          Welcome, I&apos;m
        </p>
        <h1 className="inline">Jon Deaves</h1>
        <div>
          <p
            className={`no-margin ${isHomepage ? "inline" : "hidden"}`}
            aria-hidden="true"
          >
            a&nbsp;
          </p>
          <h2 className="inline">Software Engineer</h2>
          {isHomepage && (
            <h3 className="inline">
              <a href="https://webflow.com/" rel="external">
                @Webflow
              </a>
            </h3>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
