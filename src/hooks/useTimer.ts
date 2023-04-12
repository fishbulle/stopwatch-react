import { useState, useRef } from 'react'

const useTimer = (startValue = 0) => {
    const [timer, setTimer] = useState(startValue)
    const [isRunning, setIsRunning] = useState(false)
    const countRef = useRef(0)

    // fetch sparade tider

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

    const handleSave = (/*skicka med tiden*/) => {
        // fetch POST saveTime
        setIsRunning(false)
        clearInterval(countRef.current)
        setTimer(0)
    }

    const handleDelete = () => {
        // fetch delete
    }

    return { timer, isRunning, handleStart, handleReset, handleStop, handleSave, handleDelete }
}

export default useTimer