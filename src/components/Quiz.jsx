import { useState, useCallback } from "react";
import QUESTIONS from "../Questions.js";
import logo from "../assets/quiz-complete.png";
import Questions from "./Questions.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSlectAnswer = useCallback(
    function handleUserAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prev) => {
        return [...prev, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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
        currIndex={QUESTIONS[activeQuestionIndex]}
        onSelectAnswer={handleSlectAnswer}
        selectedAnswers={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
