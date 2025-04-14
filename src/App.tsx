import React, { useEffect, useMemo, useState } from "react";
import { calculateTimeLeft } from "./utils";

export const App: React.FC = () => {
  const targetDate = useMemo(() => new Date("2025-05-07T00:00:00"), []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer); // очистка при размонтировании
  }, [targetDate]);

  return (
    <>
      <div className="wrapper">
        <div className="date-counter">
          <h1>До отпуска осталось</h1>
          <h2 className="date-items">
            <div className="date-item">
              <div className="date-count">{timeLeft.days}</div>
              <div className="date-label">дня</div>
            </div>
            <div className="date-item">
              <div className="date-count">{timeLeft.hours}</div>
              <div className="date-label">часов</div>
            </div>
            <div className="date-item">
              <div className="date-count">{timeLeft.minutes}</div>
              <div className="date-label">минут</div>
            </div>
            <div className="date-item">
              <div className="date-count">{timeLeft.seconds}</div>
              <div className="date-label">секунд</div>
            </div>
          </h2>
        </div>
      </div>
      <div className="footer">
        <a
          href="https://unsplash.com/photos/yellow-flower-field-near-snow-covered-mountain-during-daytime-K9cCqYhmodk"
          target="_blank"
          rel="noreferrer"
        >
          image
        </a>
      </div>
    </>
  );
};
