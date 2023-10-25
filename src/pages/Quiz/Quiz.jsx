import { useQuiz } from "../../context/QuizContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Quiz.module.scss";

export const Quiz = () => {
  const navigate = useNavigate();
  const { questions, fetchError, loading, dispatch, currentQuestionIndex } = useQuiz();
  const [isCorrect, setIsCorrect] = useState(false);
  useEffect(() => {
    if (loading) return <p>Loading...</p>;
    if (fetchError.error) return <p>{fetchError.message}</p>;
    if (questions === undefined || questions?.length === 0) {
      alert("Sorry, couldn't find a sutable quiz.");
      return navigate("/Start");
    }
  }, [questions, navigate, fetchError, loading]);
  console.log(questions, currentQuestionIndex);
  const { question, answers, correct_answer, incorrect_answers, type } =
    questions[currentQuestionIndex];

  function handleCheckAnswer(option) {
    console.log(option.target);
    if (option === correct_answer) setIsCorrect(true);
    dispatch({ type: "question/submitAnswer", payload: { ...question, option } });
  }

  return (
    <div className={styles.quiz_page}>
      <div className={styles.inner_quiz}>
        <div className={styles.board}>
          {isCorrect ? <p>Corrext</p> : <p>Not Correct</p>}
          {type === "boolean" ? (
            <BooleanCard question={question} onCheckAnswer={handleCheckAnswer} />
          ) : (
            <MultipleCard
              question={question}
              correct={correct_answer}
              incorrect={incorrect_answers}
              onCheckAnswer={handleCheckAnswer}
            />
          )}
        </div>
      </div>
    </div>
  );
};

function BooleanCard({ question, onCheckAnswer }) {
  return (
    <div className={styles.card}>
      <h2>{question}</h2>
      <ul>
        <li value="True" onClick={(e) => onCheckAnswer(e.target.value)}>
          True
        </li>
        <li value="False" onClick={(e) => onCheckAnswer(e.target.value)}>
          False
        </li>
      </ul>
    </div>
  );
}

function MultipleCard({ question, correct, incorrect, onCheckAnswer }) {
  const answers = [correct, ...incorrect];
  const answerStartIndex = Math.floor(Math.random() * answers.length);
  const unOrderedAnswers = [
    ...answers.slice(0, answerStartIndex),
    ...answers.slice(answerStartIndex),
  ];
  return (
    <div className={styles.card}>
      <h2>{question}</h2>
      <ul>
        {unOrderedAnswers.map((answer) => (
          <li key={answer} onClick={(e) => onCheckAnswer(e)} value={answer}>
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

// category
// :
// "Science: Computers"
// correct
// :
// "Amazon"
// difficulty
// :
// "medium"
// incorrect_answers
// :
// (3) ['eBay', 'Overstock', 'Shopify']
// question
// :
// "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?"
// type
// :
// "multiple"
