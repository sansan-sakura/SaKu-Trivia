import { useState } from "react";
import styles from "./Start.module.scss";
import { questionCategory as categories } from "../../statics/chooseQuestion";
import { useQuiz } from "../../context/QuizContext";
import { Link } from "react-router-dom";

export function Start() {
  const { dispatch, category } = useQuiz();
  const [isChosen, setIsChosen] = useState(null);

  function handleChoose(e) {
    setIsChosen(true);
    dispatch({ type: "question/category", payload: e.target.value });
  }

  return (
    <section className={styles.start}>
      <h2 className={styles.h2}>Choose the Category</h2>
      <div className={styles.start_inner}>
        {categories.map((cate, index) => (
          <div key={cate.id} className={styles.btn_wrapper}>
            <button
              onClick={(e) => handleChoose(e)}
              value={cate.id}
              style={{
                outline: isChosen && index === categories.indexOf(category) ? "pink 2px solid" : "",
              }}
            >
              {cate.name}
            </button>
          </div>
        ))}
      </div>
      {isChosen && <Link to="/Select">Next</Link>}
    </section>
  );
}
