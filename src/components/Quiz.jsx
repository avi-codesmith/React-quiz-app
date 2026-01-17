import { useState, useCallback } from "react";
import QUESTIONS from "../Questions.js";
import logo from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

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

  const currentQuestion = QUESTIONS[activeQuestionIndex];

  const randomAnswers = [...currentQuestion.answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          onTimeUp={handleSkipAnswer}
          timeout={10000}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {randomAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSlectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
