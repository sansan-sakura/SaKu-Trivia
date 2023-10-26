import { useQuiz } from "../../context/QuizContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Heading } from "../../components/Heading";
import he from "he";

import styles from "./Quiz.module.scss";
import { Button } from "../../components/Button/Button";
import { ProgressBar } from "../../components/ProgressBar";

export const Quiz = () => {
  const navigate = useNavigate();
  const {
    questions,
    fetchError,
    loading,
    dispatch,
    currentQuestionIndex,
    currentQuestion,
    howManyCorrects,
    isCorrect,
    isAnswered,
  } = useQuiz();

  const [isClicked, setIsClicked] = useState("");

  useEffect(() => {
    if (loading) return <p>Loading...</p>;
    if (fetchError.error) return <p>{fetchError.message}</p>;
    if (questions === undefined || questions?.length === 0) {
      alert("Sorry, couldn't find a sutable quiz.");
      return navigate("/Start");
    }
  }, [fetchError, loading, questions, navigate]);

  const { question, correct_answer, incorrect_answers, type } = currentQuestion;
  function handleCheckAnswer(option) {
    if (isClicked === "") return alert("Please choose one");
    if (isClicked === correct_answer) {
      dispatch({ type: "question/countCorrect" });
    }
    dispatch({
      type: "question/submitAnswer",
      payload: { ...questions[currentQuestionIndex], option },
    });
  }
  function handleClickSubmit() {
    setIsClicked("");
    dispatch({ type: "question/nextQuestion" });
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.quiz_inner}>
        <Heading>Quiz # {currentQuestionIndex + 1}</Heading>
        <ProgressBar />
        <div className={styles.board}>
          <h2>{he.decode(question)}</h2>

          {type === "boolean" ? (
            <BooleanCard
              setIsClicked={setIsClicked}
              isCorrect={isCorrect}
              isAnswered={isAnswered}
              correct={correct_answer}
              isClicked={isClicked}
            />
          ) : (
            <MultipleCard
              correct={correct_answer}
              incorrect={incorrect_answers}
              setIsClicked={setIsClicked}
              isCorrect={isCorrect}
              isAnswered={isAnswered}
              isClicked={isClicked}
            />
          )}
        </div>
        {isCorrect && (
          <div className={styles.message_box}>
            <p className={styles.correct_message}>Crrect!!</p>
          </div>
        )}
        {!isAnswered && <Button handleClick={handleCheckAnswer}>Show Answer</Button>}
        {isAnswered && <Button handleClick={handleClickSubmit}>Next Question</Button>}
        <div className={styles.countBox}>
          <p>How many time you answered correctly : {howManyCorrects}</p>
        </div>
      </div>
    </div>
  );
};

function BooleanCard({ setIsClicked, isAnswered, correct, isClicked }) {
  return (
    <div className={styles.card}>
      <ul className={styles.boolean_cards}>
        <li
          className={`${styles.true} ${isAnswered && correct === "True" ? styles.correct : ""}`}
          style={{ outline: isClicked === "True" ? " #7c2d12 solid 3px" : "" }}
        >
          <button value="True" onClick={(e) => setIsClicked(e.target.value)}>
            True
          </button>
        </li>
        <li
          className={`${styles.false} ${isAnswered && correct === "False" ? styles.correct : ""}`}
          style={{ outline: isClicked === "False" ? " #7c2d12 solid 3px" : "" }}
        >
          <button value="False" onClick={(e) => setIsClicked(e.target.value)}>
            False
          </button>
        </li>
      </ul>
    </div>
  );
}

function MultipleCard({ correct, incorrect, setIsClicked, isAnswered, isClicked }) {
  const unOrderedAnswers = useMemo(() => {
    const answers = [...incorrect, correct];
    const answerStartIndex = Math.floor(Math.random() * answers.length);
    return [...answers.slice(answerStartIndex), ...answers.slice(0, answerStartIndex)];
  }, [correct, incorrect]);
  return (
    <div className={styles.card}>
      <ul className={styles.multiple_cards}>
        {unOrderedAnswers.map((answer, index) => (
          <li
            className={` ${
              isAnswered && index === unOrderedAnswers.indexOf(correct) ? styles.correct : ""
            }`}
            key={answer}
            style={{
              outline: isClicked === answer ? " #7c2d12 solid 3px" : "",
            }}
          >
            <button onClick={(e) => setIsClicked(e.target.value)} value={answer}>
              {he.decode(answer)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
