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
        <h1>Company</h1>
        <p>About Us</p>
        <p>News</p>
        <p>Career</p>
        <p>How we Work</p>
      </div>
    </footer>
  );
}
