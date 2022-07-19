import Footer from "../Footer";
import Header from "../Header";
import SkipToContent from "../SkipToContent";

type LayoutProps = {
  children: React.ReactNode;
  isHomepage: boolean;
};

const Layout = ({ children, isHomepage }: LayoutProps) => {
  return (
    <div className="wrapper">
      <SkipToContent />
      <Header isHomepage={isHomepage} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  isHomepage: false,
};

export default Layout;
