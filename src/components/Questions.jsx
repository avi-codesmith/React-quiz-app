import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { use, useState } from "react";

export default function ({
  currIndex,
  onSelectAnswer,
  selectedAnswers,
  answerState,
  handleSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect,
    });
  }

  return (
    <div id="question">
      <QuestionTimer onTimeUp={handleSkipAnswer} timeout={10000} />
      <h2>{currIndex.text}</h2>
      <Answers
        answers={currIndex.answers}
        selectedAnswers={selectedAnswers}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
