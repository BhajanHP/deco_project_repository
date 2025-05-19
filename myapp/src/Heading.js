import "./index.css";
import img1 from "./Landing-5.jpg";
import img2 from "./Landing-logo.jpg";

function Header() {
  return (
    <div className="header-container">
      {/* Desktop Image (shown by default) */}
      <img 
        src={img1} 
        alt="Landing page" 
        className="desktop-img" 
      />
      
      {/* Mobile Image (hidden by default) */}
      <img 
        src={img2} 
        alt="Landing logo" 
        className="mobile-img" 
      />
    </div>
  );
}

export default Header;