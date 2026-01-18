import { useState, useCallback } from "react";
import QUESTIONS from "../Questions.js";
import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";

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
    return <Summary userAnswers={userAnswers} />;
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
