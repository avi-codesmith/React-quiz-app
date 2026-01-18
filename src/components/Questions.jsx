import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../Questions.js";
import { useState } from "react";

export default function Questions({
  currIndex,
  handleSkipAnswer,
  onSelectAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  let timer = 2000;

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    if (answer.selectedAnswer) {
      timer = 1000;
    }

    if (answer.isCorrect !== null) {
      timer = 2000;
    }

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[currIndex].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        onTimeUp={answer.selectedAnswer === "" ? handleSkipAnswer : null}
        timeout={timer}
        mode={answerState}
        key={timer}
      />
      <h2>{QUESTIONS[currIndex].text}</h2>
      <Answers
        answers={QUESTIONS[currIndex].answers}
        selectedAnswers={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
