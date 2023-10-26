import { useState } from "react";
import styles from "./Start.module.scss";
import { questionCategory as categories } from "../../statics/chooseQuestion";
import { useQuiz } from "../../context/QuizContext";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";

export function Start() {
  const { dispatch, category } = useQuiz();
  const [isChosen, setIsChosen] = useState(null);

  function handleChoose(id) {
    setIsChosen(true);
    dispatch({ type: "question/category", payload: id });
  }

  return (
    <section className={styles.start}>
      <Heading>Choose the Category</Heading>
      <ul className={styles.start_inner}>
        {categories.map((cate) => (
          <li
            key={cate.id}
            className={styles.btn_wrapper}
            style={{
              outline: isChosen && cate.id === category ? "#fbbf24 4px solid" : "",
              outlineOffset: isChosen && cate.id === category ? "2px" : "",
            }}
          >
            <button onClick={() => handleChoose(cate.id)} value={cate.id}>
              {cate.name}
            </button>
          </li>
        ))}
      </ul>
      {isChosen && <Button to="/Select">Next</Button>}
    </section>
  );
}
