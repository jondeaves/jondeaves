import Footer from "../Footer";
import Header from "../Header";
import SkipToContent from "../SkipToContent";

type LayoutProps = {
  children: React.ReactNode;
  isHomepage: boolean;
  shouldHeaderH1?: boolean;
};

const Layout = ({
  children,
  isHomepage,
  shouldHeaderH1 = false,
}: LayoutProps) => {
  return (
    <div className="wrapper">
      <SkipToContent />
      <Header shouldHeaderH1={shouldHeaderH1} isHomepage={isHomepage} />
      <main id="main">{children}</main>
      <Footer isHomepage={isHomepage} />
    </div>
  );
};

Layout.defaultProps = {
  isHomepage: false,
};

export default Layout;
