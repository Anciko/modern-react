import { useEffect, useRef } from 'react'

function TimerControl({ toggleTimer, resetTimer, isRunning }) {
    const startButtonRef = useRef(null)

    console.log(startButtonRef);
    
    useEffect(() => {
        if(startButtonRef) {
            startButtonRef.current.focus()
        }
    }, [] )
    return (
        <div className='mt-5'>
            <button
                ref={startButtonRef}
                onClick={() => toggleTimer()}
                className='bg-cyan-400 px-2 py-1 rounded-md text-white cursor-pointer'>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button className="bg-pink-400 px-2 py-1 rounded-md text-white cursor-pointer ml-2" onClick={() => resetTimer()}>Reset</button>
        </div>
    )
}

export default TimerControl
