import { useState, useRef } from 'react'

const useTimer = (startValue = 0) => {
    const [timer, setTimer] = useState(startValue)
    const [isRunning, setIsRunning] = useState(false)
    const countRef = useRef(0)

    const handleStart = () => {
        setIsRunning(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handleReset = () => {
        clearInterval(countRef.current)
        setIsRunning(false)
        setTimer(0)
    }

    const handleStop = () => {
        setIsRunning(false)
    }

    const handleSave = () => {
        // nånting fetch saveTime
        setIsRunning(false)
        clearInterval(countRef.current)
        setTimer(0)
    }

    return { timer, isRunning, handleStart, handleReset, handleStop, handleSave }
}

export default useTimer