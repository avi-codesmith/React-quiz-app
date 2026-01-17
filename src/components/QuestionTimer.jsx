import { useEffect, useState } from "react";

export default function QuestionTimer({ onTimeUp, timeout }) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerFunc = setTimeout(() => {
      onTimeUp();
    }, timeout);

    return () => {
      clearTimeout(timerFunc);
    };
  }, [onTimeUp]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        return prev + 10;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return <progress id="question-time" value={timer} max={timeout} />;
}
