import { Button, Stack } from '@chakra-ui/react'
import { FaPlay, FaStop, FaSave } from 'react-icons/fa'
import { RxReset } from 'react-icons/rx'
import { useRef, useState } from 'react'

const Buttons = (startValue = 0) => {
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

    return (
        <>
            <Stack direction='row' spacing={5} justifyContent="center">
                <Button onClick={handleStart} leftIcon={<FaPlay />} colorScheme='pink' variant='solid'>
                    Start
                </Button>
                <Button onClick={handleStop} leftIcon={<FaStop />} colorScheme='pink' variant='solid'>
                    Stop
                </Button>
                <Button onClick={handleReset} leftIcon={<RxReset />} colorScheme='pink' variant='solid'>
                    Reset
                </Button>
                <Button onClick={handleSave} leftIcon={<FaSave />} colorScheme='pink' variant='solid'>
                    Save
                </Button>
            </Stack>
        </>
    )
}

export default Buttons