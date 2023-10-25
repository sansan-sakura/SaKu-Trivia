import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <h1> Trevia 🤪</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </div>
    </header>
  );
};
