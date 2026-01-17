import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function ({
  currIndex,
  onSelectAnswer,
  selectedAnswers,
  answerState,
  handleSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer onTimeUp={handleSkipAnswer} timeout={10000} />
      <h2>{currIndex.text}</h2>
      <Answers
        answers={currIndex.answers}
        selectedAnswers={selectedAnswers}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
