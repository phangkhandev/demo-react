import { useEffect } from "react";
import { useState } from "react";

const CountDown = (props) => {
    const [count, setCount] = useState(1500);

    const quizId = props.quizId;

    useEffect(() => {
        //time A1 -> A4
        if (quizId > 70 && quizId < 137 || quizId > 22 && quizId < 30) {
            setCount(1140)
        }
        //time B1
        if (quizId > 136 && quizId < 157 || quizId == 30) {
            setCount(1200)
        }
        //time B2
        if (quizId > 156 && quizId < 175 || quizId == 31) {
            setCount(1320)
        }
        //time C
        if (quizId > 174 && quizId < 190 || quizId == 32) {
            setCount(1440)
        }
        //time D, E
        if (quizId > 189 || quizId > 32 && quizId < 35) {
            setCount(1560)
        }
    }, [])


    useEffect(() => {
        if (count === 0 || props.check === true) {
            props.onTimeUp();
            return;
        }

        const timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }

    }, [count])

    const toHHMMSS = (secs) => {
        const sec_num = parseInt(secs, 10)
        const hours = Math.floor(sec_num / 3600)
        const minutes = Math.floor(sec_num / 60) % 60
        const seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    }

    return (
        <div className="countdown-container">
            {toHHMMSS(count)}
        </div>
    )
}

export default CountDown;