import { useRef } from "react";

export default function Answers({
  selectedAnswers,
  answerState,
  onSelect,
  answers,
}) {
  const randomAnswers = useRef();
  const currentQuestion = answers;

  if (!randomAnswers.current) {
    randomAnswers.current = [...currentQuestion].sort(
      () => Math.random() - 0.5
    );
  }
  return (
    <ul id="answers">
      {randomAnswers.current.map((answer) => {
        const isSelected = selectedAnswers === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
