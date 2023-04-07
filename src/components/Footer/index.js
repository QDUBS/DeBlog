import React from "react";
import "./styles.css";
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footerSocialSection">
        <span>
          <Link to="">
            <Facebook />
          </Link>
        </span>
        <span>
          <Link to="">
            <WhatsApp />
          </Link>
        </span>
        <span>
          <Link to="">
            <Instagram />
          </Link>
        </span>
        <span>
          <Link to="">
            <Twitter />
          </Link>
        </span>
      </div>

      <p className="copyright">© 2023 De Blog All Rights Reserved.</p>

      {/* <button onclick="topFunction()" id="scrollTop" title="Go to top">
        <i class="fa fa-chevron-up"></i>
      </button> */}
    </div>
  );
}

export default Footer;
