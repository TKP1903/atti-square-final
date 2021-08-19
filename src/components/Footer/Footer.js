import React from "react";
import "./Footer.css";
// import fb from "../Home/images/facebook.png";
// import twitter from "../Home/images/youtube.png";
// import insta from "../Home/images/instagram.png";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const yr = new Date().getFullYear();
  return (
    <div className="footer-content">
      <h3 className="footer-text">
        Copyright © {yr} Atti Square. All Rights Reserved{" "}
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </h3>
      <ul className="social">
        <li>
          <a href="https://www.facebook.com/attisquare/" target="_blank">
            <img
              src="https://attisquare.s3.amazonaws.com/facebook.png"
              alt=""
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/attisquare/"
            className="link"
            target="_blank"
          >
            <img
              src="https://attisquare.s3.amazonaws.com/instagram.png"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
