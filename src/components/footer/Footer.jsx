import React from "react";
// logo
import Logo from "../../images/logo_dark.png";
// styles
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img src={Logo} alt="/" />
        <button>Share a Car</button>
      </div>
    </div>
  );
};

export default Footer;
