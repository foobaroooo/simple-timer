import { useState, useEffect } from 'react';

interface TimeCounterProps {
    isRunning: boolean,
    isReset: boolean
}

export default function TimeCounter({ isRunning, isReset }: TimeCounterProps) {
    const [timeLeft, setTimeLeft] = useState(300);
    
    useEffect(() => {
        if (isReset) {
            setTimeLeft(300);
        }

        // if timeLeft is 0 or isRunning is false do not run the timer
        if (timeLeft <= 0 || !isRunning) return;

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, isRunning, isReset]);

    // format timeLeft from seconds to minutes:seconds
    const formattedDate = Intl.DateTimeFormat("en-US", {
        minute: "numeric",
        second: "numeric",
      }).format( new Date(0, 0, 0, 0, 0, timeLeft));


    return (
        <div className="time-counter">
            <h1>{formattedDate}</h1>
        </div>
    );
}