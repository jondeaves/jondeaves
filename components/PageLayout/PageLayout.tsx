import { PropsWithChildren } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipToContent } from "@/components/SkipToContent";

interface PageLayoutProps extends PropsWithChildren {
  isHomepage?: boolean;
  isH1?: boolean;
}

export const PageLayout = ({
  children,
  isHomepage = false,
  isH1 = false,
}: PageLayoutProps) => (
  <>
    <SkipToContent />
    <Header isH1={isH1} isHomepage={isHomepage} />
    <main id="main">{children}</main>
    <Footer isHomepage={isHomepage} />
  </>
);
