import HeaderStyles from "./Header.module.css";

type HeaderProps = {
  isHomepage?: boolean;
};

const Header = ({ isHomepage }: HeaderProps) => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.inner}>
        <div className={HeaderStyles.titles}>
          <a className="skip-to-content" href="#main">
            Skip to content
          </a>
          <p
            className={isHomepage ? "inline spaced-right" : "hidden"}
            aria-hidden="true"
          >
            Welcome, I&apos;m
          </p>
          <h1 className="inline">Jon Deaves</h1>
          <div>
            <p className={isHomepage ? "inline" : "hidden"} aria-hidden="true">
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
        {isHomepage && (
          <p className={HeaderStyles.bio}>
            I&apos;m an experienced developer specialising in interactive web
            applications and I take pride in creating modern, responsive and
            progressive user experiences.
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
