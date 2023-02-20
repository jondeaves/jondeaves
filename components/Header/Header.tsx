import React from "react";
import Link from "next/link";
import ExternalLink from "../ExternalLink";
import HeaderStyles from "./Header.module.css";

export type HeaderProps = {
  isHomepage: boolean;
  shouldHeaderH1?: boolean;
};

const Header = ({ isHomepage, shouldHeaderH1 = false }: HeaderProps) => {
  const TitleElement = React.createElement(
    shouldHeaderH1 ? "h1" : "h2",
    {
      className: HeaderStyles.heading1,
    },
    isHomepage ? <>Jon Deaves</> : <Link href="/">Jon Deaves</Link>,
  );

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
          {TitleElement}
        </div>
        <div>
          <p
            className={isHomepage ? HeaderStyles.text : "hidden"}
            aria-hidden="true"
          >
            a&nbsp;
          </p>
          <h2 className={HeaderStyles.heading2}>Software Developer</h2>
          {/* {isHomepage && (
            <h3 className={HeaderStyles.heading3}>
              <ExternalLink href="[Company website]" label="@[Company name]" />
            </h3>
          )} */}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  isHomepage: false,
};

export default Header;
