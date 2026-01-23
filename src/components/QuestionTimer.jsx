import { useEffect, useState } from "react";

export default function QuestionTimer({ onTimeUp, timeout, mode }) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerFunc = setTimeout(() => {
      if (onTimeUp !== null) {
        onTimeUp();
      }
    }, timeout);

    return () => {
      clearTimeout(timerFunc);
    };
  }, [onTimeUp, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        return prev + 10;
      });
    }, 8);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <progress id="question-time" value={timer} max={timeout} className={mode} />
  );
}
