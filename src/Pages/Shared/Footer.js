import React from "react";
import footerimg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer style={{
        background: `url(${footerimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
      <div    className="footer p-10">
        <div>
          <span    className="footer-title">Home</span>
          <a    className="link link-hover"> Privacy</a>
          <a    className="link link-hover">Policy </a>
       
        </div>
        <div>
          <span    className="footer-title">Contact</span>
          <a    className="link link-hover">Privacy</a>
          <a    className="link link-hover">Address</a>
        
        </div>
        <div>
          <span    className="footer-title">OUR ADDRESS</span>
          <a    className="link link-hover">JOSS (just one stop solution)</a>
        </div>
      </div>
      <div    className="footer-center p-4">
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
