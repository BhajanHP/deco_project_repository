import Header from "./Heading"
import Footer from "./Footer"
import contacts from "./Contacts.js"
import Products from "./Products.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState ,useEffect} from "react";
import Loader from "./Logo.js";
AOS.init();


function App(){
  const [loading , setLoading] = useState(true);

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
  
  return(
    <div style={{ overflowX: 'hidden', width: '100%' }}>
    <Header/>
    <Products />
    <Footer />
  </div>
);
}

export default App;