import "./PageLayout";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
