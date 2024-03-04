import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
