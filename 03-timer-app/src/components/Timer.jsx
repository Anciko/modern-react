import { useEffect, useRef, useState } from 'react'
import TimerControl from './TimerControl'

const Timer = () => {
    const timerRef = useRef(null)

    const [time, setTime] = useState(() => {
        return Number(localStorage.getItem('time') || 0);
    })
    const [isRunning, setIsRunning] = useState(false)


    useEffect(() => {
        localStorage.setItem('time', time);
    }, [time])

    const toggleTimer = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        } else {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }

        setIsRunning(!isRunning)
    }

    const resetTimer = () => {
        setTime(0);
        setIsRunning(false);
        clearInterval(timerRef.current);
        timerRef.current = null;
        localStorage.removeItem('time')
    }




    return (
        <div className='bg-white max-w-md mx-auto mt-10 p-5 text-center'>
            <h1 className='font-bold'>Timer: <span ref={timerRef}>{time}</span></h1>
            <TimerControl toggleTimer={() => toggleTimer()} resetTimer={resetTimer} isRunning={isRunning}/>
        </div>
    )
}

export default Timer
