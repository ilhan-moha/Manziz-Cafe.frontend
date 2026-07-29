import {Link} from "react-router-dom";
import { 
    FaFacebookF, 
    FaInstagram, 
    FaTwitter,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt } 
    from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

        <div className="footer-about">
            <h2>Manziz Cafe</h2>
            <p>Experience the perfect blend of coffee and ambiance at Manziz Cafe.
                Indulge in our handcrafted beverages and delectable treats,
                all served with a smile.
            </p>
        </div>

        <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Our Menu</Link></li>
                <li><Link to= "/about">About Us</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/Contact">contact</Link></li>
            </ul>
        </div>

        <div className="footer-contact">
            <h3>Get in Touch</h3>
            <p><FaMapMarkerAlt /> Westlands, Nairobi</p>
            <p><FaPhone /> +254 712 345 678</p>
            <p><FaEnvelope /> info@manzizcafe.com</p>

    
        </div>

        </div>

        <div className="footer-bottom">
            <div className="social-icons">
               <FaFacebookF/>
               <FaInstagram />
               <FaTwitter />
            </div>
            <p>&copy; {new Date().getFullYear()} Manziz Cafe. All rights reserved.</p>
            </div>
     </footer>

    );
}

export default Footer;
