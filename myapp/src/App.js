import Header from "./Heading";
import Footer from "./Footer";
import contacts from "./Contacts.js";
import Products from "./Products.js";
import SoapDetails from "./SoapDetails.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";
import Loader from "./Logo.js";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

AOS.init();

function LayoutWrapper({ children }) {
  const location = useLocation();

  // Only show Header if not on soap-details page
  const hideHeader = location.pathname === "/soap-details";

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      {!hideHeader && <Header />}
      {children}
      <Footer />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
    const delay = setTimeout(() => setLoading(false), 4000);

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      clearTimeout(delay);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/soap-details" element={<SoapDetails />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
