import { Header } from "../../components/Header";
import styles from "./ErrorPage.module.scss";
import { Button } from "../../components/Button";

export const ErrorPage = () => {
  return (
    <section className={styles.error}>
      <Header />
      <div className={styles.error_inner}>
        <p>404</p>
        <p>Ooops!! Something went wrong!!</p>
        <Button to="/">Back</Button>
      </div>
    </section>
  );
};
