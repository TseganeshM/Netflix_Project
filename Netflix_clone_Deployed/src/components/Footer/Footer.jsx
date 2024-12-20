import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer footer_container">
        <section className="footer__ask">
          <a href="#">Question? Contact us.</a>
          <div className="footer_icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </section>
        <section className="footer__content grid grid__1x4">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="">FAQ</a>
            </li>
            <li className="footer__item">
              <a href="">Investor Relations</a>
            </li>
            <li className="footer__item">
              <a href="">Buy Gift Cards </a>
            </li>
            <li className="footer__item">
              <a href="">Cookie Preferences</a>
            </li>
            <li className="footer__item">
              <a href="">Speed Test</a>
            </li>
          </ul>
          <ul>
            <li className="footer__item">
              <a href="">Help Center</a>
            </li>
            <li className="footer__item">
              <a href="">Jobs</a>
            </li>
            <li className="footer__item">
              <a href="">Ways to Watch</a>
            </li>
            <li className="footer__item">
              <a href="">Corporate Information </a>
            </li>
            <li className="footer__item">
              <a href="">Legal Notices</a>
            </li>
          </ul>
          <ul>
            <li className="footer__item">
              <a href="">Account</a>
            </li>
            <li className="footer__item">
              <a href="">Netflix Shop</a>
            </li>
            <li className="footer__item">
              <a href="">Terms of Use </a>
            </li>
            <li className="footer__item">
              <a href="">Contact Us </a>
            </li>
            <li className="footer__item">
              <a href="">Only on Netflix</a>
            </li>
          </ul>
          <ul>
            <li className="footer__item">
              <a href="">Media Center</a>
            </li>
            <li className="footer__item">
              <a href="">Redeem Gift Cards</a>
            </li>
            <li className="footer__item">
              <a href="">Privacy</a>
            </li>
            <li className="footer__item">
              <a href="">Act on Specified Commercial Transactions</a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}

export default Footer;
