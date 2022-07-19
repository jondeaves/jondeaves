import Link from "next/link";
import HeaderStyles from "./Header.module.css";

type HeaderProps = {
  isHomepage?: boolean;
};

const Header = ({ isHomepage }: HeaderProps) => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.inner}>
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
