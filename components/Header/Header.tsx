import React from "react";
import Link from "next/link";

import { ExternalLink } from "@/components/ExternalLink";

import HeaderStyles from "./Header.module.css";

interface HeaderProps {
  isHomepage: boolean;
  isH1?: boolean;
}

export const Header = ({ isHomepage = false, isH1 = false }: HeaderProps) => {
  const TitleElement = React.createElement(
    isH1 ? "h1" : "h2",
    {
      className: HeaderStyles.heading1,
    },
    isHomepage ? (
      <>Jon Deaves</>
    ) : (
      <Link href="/" className="unstyled">
        Jon Deaves
      </Link>
    ),
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
          <h2 className={HeaderStyles.heading2}>Web Developer</h2>
          {isHomepage && (
            <h3 className={HeaderStyles.heading3}>
              <ExternalLink href="https://logo.com/" label="@LOGO.com" />
            </h3>
          )}
        </div>
      </div>
    </header>
  );
};
