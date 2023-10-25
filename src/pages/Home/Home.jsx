import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { useGifs } from "../../hooks/useGetData";
import { gifsUrl as url } from "../../statics/chooseQuestion";
export const Home = () => {
  const { data, error, isLoading } = useGifs(url);
  if (isLoading) return;
  console.log(data.data);

  return (
    <section className={styles.home_page}>
      <div className={styles.inner_home}>
        <h2 className={styles.h2}>Welcome to SaKu Trivia 🐲</h2>
        <div className={styles.iframe_wrapper}>
          <iframe
            className={styles.iframe}
            src={data.data.embed_url}
            allow="encrypted-media;"
          ></iframe>
          <div className={styles.cover}></div>
        </div>
        <Link className={styles.button} to="/Start">
          Start
        </Link>
      </div>
    </section>
  );
};
