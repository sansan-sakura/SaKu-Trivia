import { useQuiz } from "../../context/QuizContext";
import { useState } from "react";
import styles from "./Select.module.scss";
import { questionDifficulty as diff } from "../../statics/chooseQuestion";
import { Link } from "react-router-dom";

export const Select = () => {
  const { difficulty, dispatch } = useQuiz();
  const [isChosen, setIsChosen] = useState(null);

  function handleChoose(e) {
    setIsChosen(true);
    dispatch({ type: "question/difficulty", payload: e.target.value });
  }
  return (
    <div className={styles.select_page}>
      {diff.map((item, index) => (
        <div key={item}>
          <button
            onClick={(e) => handleChoose(e)}
            value={item}
            style={{
              outline: isChosen && index === diff.indexOf(difficulty) ? "pink 2px solid" : "",
            }}
          >
            {item}
          </button>
        </div>
      ))}
      {isChosen && <Link to="/Quiz">Start Quiz</Link>}
    </div>
  );
};
