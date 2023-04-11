import { useEffect, useState } from 'react'
import { Button, Stack } from '@chakra-ui/react'
import { FaPlay, FaStop, FaSave } from 'react-icons/fa'
import { RxReset } from 'react-icons/rx'

interface Props {
    save: (id: number, time: number) => void
}

const Stopwatch = ({ save }: Props) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: any;

        if (isRunning)
            interval = setInterval(() => {
                setTime(time => time + 1)
            }, 1000);
        else
            clearInterval(interval)

        return () => {
            clearInterval(interval)
        }
    }, [isRunning]);

    return (
        <>
            <Stack direction='row' spacing={5} justifyContent="center">
                <Button onClick={() => setIsRunning(true)} leftIcon={<FaPlay />} colorScheme='pink' variant='solid'>
                    Start
                </Button>
                <Button onClick={() => setIsRunning(false)} leftIcon={<FaStop />} colorScheme='pink' variant='solid'>
                    Stop
                </Button>
                <Button onClick={() => setTime(0)} leftIcon={<RxReset />} colorScheme='pink' variant='solid'>
                    Reset
                </Button>
                <Button onClick={() => {
                    save(0, time)
                    setTime(0)
                }} leftIcon={<FaSave />} colorScheme='pink' variant='solid'>
                    Save
                </Button>
            </Stack>
        </>
    )
}

export default Stopwatch