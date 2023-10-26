import { useQuiz } from "../../context/QuizContext";
import { useState } from "react";
import styles from "./Select.module.scss";
import { questionDifficulty as diff } from "../../statics/chooseQuestion";
import { Link } from "react-router-dom";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { gifsUrl } from "../../statics/chooseQuestion";
import { Gifs } from "../../components/Gifs";

export const Select = () => {
  const { difficulty, dispatch } = useQuiz();
  const [isChosen, setIsChosen] = useState(null);

  function handleChoose(e) {
    setIsChosen(true);
    dispatch({ type: "question/difficulty", payload: e.target.value });
  }
  return (
    <section className={styles.select}>
      <Heading>Choose difficulty of the Quiz</Heading>
      <div className={styles.gifs_wrapper}>
        <Gifs url={gifsUrl} />
      </div>

      <ul className={styles.select_inner}>
        {diff.map((item, index) => (
          <li key={item} className={styles.btn_wrapper}>
            <button
              onClick={(e) => handleChoose(e)}
              value={item}
              style={{
                outline:
                  isChosen &&
                  index ===
                    diff.indexOf(difficulty[0].toUpperCase().concat("", difficulty.slice(1)))
                    ? "#fbbf24 4px solid"
                    : "",
                outlineOffset:
                  isChosen &&
                  index ===
                    diff.indexOf(difficulty[0].toUpperCase().concat("", difficulty.slice(1)))
                    ? "2px"
                    : "",
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      {isChosen && <Button to="/Quiz">Start Quiz</Button>}
    </section>
  );
};
