import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./Contact/ContactUs";
import GetInTouch from "./common/GetInTouch";
import ScrollToTop from "./common/ScrollToTop";

function App() {
  const location = useLocation();
  const hideGetInTouch = location.pathname === "/contact";
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideGetInTouch && <GetInTouch key={location.pathname} />}
      <Footer />
    </>
  );
}

export default App;
