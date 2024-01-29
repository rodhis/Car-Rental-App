import logo from "../../assets/img/logo-white.svg";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <img src={logo} alt="locofy logo" />
        <p>MyRide Inc., 2nd Floor, New York, NY 10016</p>
        <div className={styles.social}>
          <img src={facebook} alt="facebook logo" />
          <img src={instagram} alt="instagram logo" />
          <img src={twitter} alt="twitter logo" />
        </div>
      </div>
      <div className={styles.footerMenu}>
        <div>
          <h1>Company</h1>
          <a href="">About Us</a>
          <a href="">News</a>
          <a href="">Career</a>
          <a href="">How we Work</a>
        </div>
        <div>
          <h1>Support</h1>
          <a href="">FAQ</a>
          <a href="">US Office</a>
          <a href="">Asia Office</a>
          <a href="">Help Center</a>
        </div>
        <div>
          <h1>More</h1>
          <a href="">Become a Partner</a>
          <a href="">Partnet Support</a>
          <a href="">Mobile app links</a>
        </div>
      </div>
    </footer>
  );
}
