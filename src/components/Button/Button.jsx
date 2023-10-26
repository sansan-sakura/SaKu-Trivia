import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

export const Button = ({ to = null, children, handleClick = null }) => {
  const ButtonEl = to ? Link : "button";
  return (
    <ButtonEl className={styles.button} to={to} onClick={handleClick}>
      {children}
    </ButtonEl>
  );
};
