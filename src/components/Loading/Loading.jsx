import styles from "./Loading.module.scss";
export const Loading = () => {
  return (
    <div className={styles.loader_box}>
      <span className={styles.loader}></span>
    </div>
  );
};
