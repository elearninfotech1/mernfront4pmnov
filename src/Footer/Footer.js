import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import footerStyles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={footerStyles}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>&copy; 2024 Elearn Infotech</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
