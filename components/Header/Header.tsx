import Link from "next/link";
import ExternalLink from "../ExternalLink";
import HeaderStyles from "./Header.module.css";

export type HeaderProps = {
  isHomepage: boolean;
};

const Header = ({ isHomepage }: HeaderProps) => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.inner}>
        <div className={HeaderStyles.titleWrapper}>
          <p
            className={
              isHomepage
                ? [HeaderStyles.text, HeaderStyles.textDoubleSpaced].join(" ")
                : "hidden"
            }
            aria-hidden="true"
          >
            Welcome, I&apos;m
          </p>
          <h1 className={HeaderStyles.heading1}>
            {isHomepage ? <>Jon Deaves</> : <Link href="/">Jon Deaves</Link>}
          </h1>
        </div>
        <div>
          <p
            className={isHomepage ? HeaderStyles.text : "hidden"}
            aria-hidden="true"
          >
            a&nbsp;
          </p>
          <h2 className={HeaderStyles.heading2}>Software Engineer</h2>
          {isHomepage && (
            <h3 className={HeaderStyles.heading3}>
              <ExternalLink href="https://webflow.com" label="@Webflow" />
            </h3>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  isHomepage: false,
};

export default Header;
