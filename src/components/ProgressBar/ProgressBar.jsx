import { useQuiz } from "../../context/QuizContext";
import styles from "./ProgressBar.module.scss";

export const ProgressBar = () => {
  const { currentQuestionIndex, questions } = useQuiz();
  const questionNum = currentQuestionIndex + 1;
  const length = questions.length;

  return (
    <div className={styles.wrapper}>
      <p className={styles.num}>
        {questionNum} / {length}
      </p>
      <div className={styles.progressBar_outer}>
        <div
          className={styles.progressBar_inner}
          style={{ width: (questionNum / length) * 560 }}
        ></div>
      </div>
    </div>
  );
};
