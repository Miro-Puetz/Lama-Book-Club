import react from "react";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header} id="myHeader">
      <h2>{props.children}</h2>
    </div>
  );
};

export default Header;
