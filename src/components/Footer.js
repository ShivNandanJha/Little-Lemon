import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                  <img src={Logo} alt="Little Lemon logo" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, doloremque. Voluptate numquam, rerum iure molestias reiciendis at. Nobis, porro eum.</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>Accra</li>
                            <li>Kumasi</li>
                            <li>Cape Coast</li>
                            <li>Tamale</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Monday - Wednesday: 10:30AM - 12:00AM</li>
                            <li>Friday: 12:00PM - 1:00AM</li>
                            <li>Saturday - Sunday: 10:30AM - 12:00AM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Tel: 020 7928 0678</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
