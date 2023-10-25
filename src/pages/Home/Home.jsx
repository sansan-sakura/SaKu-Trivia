import styles from "./Home.module.scss";
import { Button } from "../../components/Button";
import { Gifs } from "../../components/Gifs";
import { Heading } from "../../components/Heading";
import { gifsUrl as url } from "../../statics/chooseQuestion";
export const Home = () => {
  return (
    <section className={styles.home_page}>
      <div className={styles.inner_home}>
        <Heading>Welcome to SaKu Trivia 🐲</Heading>
        <div className={styles.iframe_wrapper}>
          <Gifs url={url} />
        </div>
        <Button to="/Start">Start</Button>
      </div>
    </section>
  );
};
