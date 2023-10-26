import { createContext, useContext, useEffect, useReducer } from "react";

import { useGetData } from "../hooks/useGetData";

const initialState = {
  category: "9",
  difficulty: "hard",
  questions: [],
  fetchError: {},
  loading: false,
  currentQuestionIndex: 0,
  answeredResults: [],
  currentQuestion: {},
  howManyCorrects: 0,
  isAnswered: false,
  isCorrect: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "question/category":
      return {
        ...state,
        category: action.payload,
      };
    case "question/difficulty":
      return {
        ...state,
        difficulty: action.payload.toLowerCase(),
      };
    case "question/setQuestions":
      return {
        ...state,
        loading: false,
        questions: action.payload,
        currentQuestion: action.payload[state.currentQuestionIndex],
      };
    case "question/setError":
      return {
        ...state,
        fetchError: {
          error: true,
          message: "Something went wrong while fetching data",
        },
      };
    case "question/setIsLoading":
      return {
        ...state,
        loading: true,
      };
    case "question/nextQuestion":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        currentQuestion: state.questions[state.currentQuestionIndex + 1],
        isAnswered: false,
        isCorrect: false,
      };
    case "question/countCorrect":
      return {
        ...state,
        howManyCorrects: state.howManyCorrects + 1,
        isCorrect: true,
      };
    case "question/submitAnswer":
      return {
        ...state,
        answeredResults: [...state.answeredResults, action.payload],
        isAnswered: true,
      };
    default:
      throw new Error(" type is not declared");
  }
}

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [
    {
      category,
      difficulty,
      answers,
      questions,
      fetchError,
      loading,
      currentQuestionIndex,
      answeredResults,
      currentQuestion,
      howManyCorrects,
      isCorrect,
      isAnswered,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const { data, isLoading, error } = useGetData(difficulty, category);
  useEffect(() => {
    if (error) dispatch({ type: "question/setError" });
    if (isLoading) dispatch({ type: "question/setIsLoading" });
    if (data) dispatch({ type: "question/setQuestions", payload: data.results });
  }, [data, error, isLoading]);

  return (
    <QuizContext.Provider
      value={{
        category,
        difficulty,
        answers,
        questions,
        fetchError,
        loading,
        currentQuestionIndex,
        answeredResults,
        currentQuestion,
        howManyCorrects,
        isCorrect,
        isAnswered,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error("Definded outside of quixProvider");
  return context;
};

export { useQuiz, QuizProvider };
