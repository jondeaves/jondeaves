import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
