import './App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
           Deco is a premium brand offering coffee-infused skincare and body care products designed to 
           refresh and nourish your skin naturally. Our range includes coffee face and body scrubs, 
           lip butter and scrub, body polishing oil, body wash, and even a coffee car perfume. </p>
             </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Chikkamagaluru - 577101</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+91 9964040782</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>decosip239@gmail.com</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/AkashrajDP/" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/deco_coffee_scrub?igsh=cHIxOHNqNXgzdzA=" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://wa.me/9964040782" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DECO. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;