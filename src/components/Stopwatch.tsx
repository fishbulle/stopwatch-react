import { Button, Stack } from '@chakra-ui/react'
import { FaPlay, FaStop, FaSave } from 'react-icons/fa'
import { RxReset } from 'react-icons/rx'
import { useRef, useState } from 'react'

export const showTime = (time: number) => {

    const totalMin = Math.floor(time / 60)
    const sec = time % 60
    const hrs = Math.floor(totalMin / 60)
    const min = totalMin % 60

    if (hrs < 1 && min < 1) return sec + 's'
    if (hrs < 1) return min + 'm ' + sec + 's'

    return hrs + 'h ' + min + 'm ' + sec + 's'
}

const Stopwatch = (startValue = 0) => {
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

    const handleSave = (/*skicka med tiden*/) => {
        // fetch POST saveTime
        setIsRunning(false)
        clearInterval(countRef.current)
        setTimer(0)
    }

    return (
        <>
            <Stack direction='row' spacing={5} justifyContent="center">
                <Button onClick={() => handleStart()} leftIcon={<FaPlay />} colorScheme='pink' variant='solid'>
                    Start
                </Button>
                <Button onClick={() => handleStop()} leftIcon={<FaStop />} colorScheme='pink' variant='solid'>
                    Stop
                </Button>
                <Button onClick={() => handleReset()} leftIcon={<RxReset />} colorScheme='pink' variant='solid'>
                    Reset
                </Button>
                <Button onClick={() => handleSave()} leftIcon={<FaSave />} colorScheme='pink' variant='solid'>
                    Save
                </Button>
            </Stack>
        </>
    )
}
