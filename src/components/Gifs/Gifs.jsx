import styles from "./Gifs.module.scss";
import { useGifs } from "../../hooks/useGetData";
import { Loading } from "../Loading";
export const Gifs = ({ url, id }) => {
  const { data, isLoading } = useGifs(url, id);
  if (isLoading) return <Loading />;
  const urlData = data.data.length && data.data.length > 0 ? data.data[4] : data.data;

  return (
    <>
      <iframe className={styles.iframe} src={urlData.embed_url} allow="encrypted-media;"></iframe>
      <div className={styles.cover}></div>
    </>
  );
};
