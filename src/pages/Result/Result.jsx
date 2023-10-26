import styles from "./Result.module.scss";
import { useQuiz } from "../../context/QuizContext";
import { Heading } from "../../components/Heading";
import { Gifs } from "../../components/Gifs";
import { createGifsUrl } from "../../statics/chooseQuestion";
import { chooseString } from "../../helpers/helpers";
import { Button } from "../../components/Button";

export const Result = () => {
  const { questions, howManyCorrects } = useQuiz();
  const percentage = howManyCorrects / questions.length;

  return (
    <section className={styles.result}>
      <div className={styles.result_inner}>
        <Heading>Your Result 🌸</Heading>
        <div className={styles.board}>
          <Gifs url={createGifsUrl(chooseString(percentage))} id="results" />

          <div className={styles.num_box}>
            <p className={styles.num}>
              You answered correctly
              <span>
                {" "}
                {howManyCorrects} / {questions.length}{" "}
              </span>
              questions.
            </p>
            <p className={styles.per}>{percentage * 100} %</p>
          </div>
        </div>
        <Button to="/">Try Again?</Button>
      </div>
    </section>
  );
};
