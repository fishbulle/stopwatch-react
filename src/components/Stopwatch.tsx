import { useEffect, useState } from 'react'
import { Button, Stack } from '@chakra-ui/react'
import { FaPlay, FaPause, FaStop, FaSave } from 'react-icons/fa'
import { RxReset } from 'react-icons/rx'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let interval: any;

        if (isRunning && isPaused === false)
            interval = setInterval(() => {
                setTime(time => time + 1)
            }, 1000);
        else
            clearInterval(interval);

        return () => {
            clearInterval(interval)
        }
    }, [isRunning, isPaused]);

    return (
        <>
            <Stack direction='row' spacing={4} justifyContent="center">
                <Button onClick={() => setIsRunning(true)} leftIcon={<FaPlay />} colorScheme='pink' variant='solid'>
                    Start
                </Button>
                <Button onClick={() => setIsPaused(true)} leftIcon={<FaPause />} colorScheme='pink' variant='solid'>
                    Pause
                </Button>
                <Button onClick={() => setIsRunning(false)} leftIcon={<FaStop />} colorScheme='pink' variant='solid'>
                    Stop
                </Button>
                <Button onClick={() => setTime(0)} leftIcon={<RxReset />} colorScheme='pink' variant='solid'>
                    Reset
                </Button>
                <Button onClick={() => console.log('SAVING...')} leftIcon={<FaSave />} colorScheme='pink' variant='solid'>
                    Save
                </Button>
            </Stack>
        </>
    )
}

export default Stopwatch