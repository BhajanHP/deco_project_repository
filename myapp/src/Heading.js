import "./index.css";
import img1 from "./Landing-logo.jpg";
import img2 from "./collage_photo.jpg";

function Header(props) {
  return (
    <div className="header-container">
      <img
        src={img1}
        alt="Landingpage"
        className="header-image"
      />
    </div>
  );
}

export default Header;