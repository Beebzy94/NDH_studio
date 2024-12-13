import React from "react";
import "../styles/FooterComponent.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="header_container">
          <h1 className="footer_header">
            Ready to redefine <br /> your space?
          </h1>
          <img
            className="footer_image"
            src="/footerimage.png"
            alt="chair and wheat"
          ></img>
          <p id="footer_text"></p>
          <a>
            <h2 id="footer_link"></h2>
          </a>
        </div>
      </div>
      <div className="bottom_container">
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">our services</a>
                  </li>
                  <li>
                    <a href="#">privacy policy</a>
                  </li>
                  <li>
                    <a href="#">affiliate program</a>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>get help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">shipping</a>
                  </li>
                  <li>
                    <a href="#">returns</a>
                  </li>
                  <li>
                    <a href="#">order status</a>
                  </li>
                  <li>
                    <a href="#">payment options</a>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>online shop</h4>
                <ul>
                  <li>
                    <a href="#">watch</a>
                  </li>
                  <li>
                    <a href="#">bag</a>
                  </li>
                  <li>
                    <a href="#">shoes</a>
                  </li>
                  <li>
                    <a href="#">dress</a>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                  <a href="#">
                    <i class="fa-facebook-f"></i>
                    <FaFacebookF className="icon" size={24} color="#4267B2" />
                  </a>
                  <a href="#">
                    <FaTwitter className="icon" size={24} color="#1DA1F2" />
                  </a>
                  <a href="#">
                    <FaInstagram className="icon" size={24} color="#C13584" />
                  </a>
                  <a href="#">
                    <FaLinkedinIn className="icon" size={24} color="#0077B5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
