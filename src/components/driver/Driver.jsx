import React from "react";

// img
import Drive from "../../images/drive.png";

// styles
import styles from "./Driver.module.css";

const Driver = () => {
  return (
    <div className={styles.driver}>
      {/* Left side */}
      <div className={styles.left}>
        <img src={Drive} alt="" />
      </div>
      {/* Right side */}
      <div>
        <h1>
          Find your perfect car <span>to try before you buy</span>
        </h1>
        <p>Make sure your future wheels work well your lifestyle by taking your time inthe driving seat</p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
};

export default Driver;
