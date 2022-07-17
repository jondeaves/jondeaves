import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
  isHomepage?: boolean;
};

const Layout = ({ children, isHomepage }: LayoutProps) => {
  return (
    <div className="wrapper">
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <Header isHomepage={isHomepage} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
