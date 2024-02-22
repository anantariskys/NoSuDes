import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
