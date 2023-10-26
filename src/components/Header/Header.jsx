import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <NavLink to="/">
          <h1> SaKu Trivia 🦄</h1>
        </NavLink>
      </div>
    </header>
  );
};
