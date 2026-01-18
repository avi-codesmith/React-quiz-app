import { useState, useCallback } from "react";
import QUESTIONS from "../Questions.js";
import logo from "../assets/quiz-complete.png";
import Questions from "./Questions.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSlectAnswer = useCallback(function handleUserAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSlectAnswer(null),
    [handleSlectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={logo} alt="Trophy icon" />
        <h2 className="heading">Quiz completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        currIndex={activeQuestionIndex}
        onSelectAnswer={handleSlectAnswer}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
