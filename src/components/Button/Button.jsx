import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

export const Button = ({ to, children }) => {
  return (
    <Link className={styles.button} to={to}>
      {children}
    </Link>
  );
};
