import styles from "./Gifs.module.scss";
import { useGifs } from "../../hooks/useGetData";
export const Gifs = ({ url }) => {
  const { data, error, isLoading } = useGifs(url);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <iframe className={styles.iframe} src={data.data.embed_url} allow="encrypted-media;"></iframe>
      <div className={styles.cover}></div>
    </>
  );
};
