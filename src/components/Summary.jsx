import logo from "../assets/quiz-complete.png";
import QUESTIONS from "../Questions.js";

export default function Summary({ userAnswers }) {
  const skippedCount = userAnswers.filter((answer) => answer === null).length;
  const skipped = (skippedCount / 7) * 100;

  const correctCount = userAnswers.filter(
    (answer, index) => QUESTIONS[index].answers[0] === answer
  ).length;
  const correct = (correctCount / 7) * 100;

  const wrongCount = userAnswers.filter(
    (answer, index) => QUESTIONS[index].answers[0] !== answer
  ).length;
  const wrong = (wrongCount / 7) * 100;

  return (
    <div id="summary">
      <img src={logo} alt="Trophy icon" />
      <h2 className="heading">Quiz completed!</h2>
      <div id="summary-status">
        <p className="status-w">
          <p className="number">{skipped.toFixed(1)}%</p>
          <p className="text">
            Skipped Answers
            <p className="dull">"{skippedCount}"</p>
          </p>
        </p>
        <p className="status-w">
          <p className="number">{correct.toFixed(1)}%</p>
          <p className="text">
            Correct Answers
            <p className="dull">"{correctCount}"</p>
          </p>
        </p>
        <p className="status-w">
          <p className="number">{wrong.toFixed(1)}%</p>
          <p className="text">
            Wrong Answers
            <p className="dull">"{wrongCount}"</p>
          </p>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
