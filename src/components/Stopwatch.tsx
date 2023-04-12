import { Box, Button, Center, Stack, Text } from '@chakra-ui/react'
import { FaPlay, FaStop, FaSave } from 'react-icons/fa'
import { RxReset } from 'react-icons/rx'
import { useEffect, useState } from 'react'
import timeService, { Time } from '../services/time-service'
import useTimes from '../hooks/useTimes'

const Stopwatch = () => {
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const { times, setTimes, error, setError } = useTimes()

    useEffect(() => {
        let interval: any;

        if (isRunning)
            interval = setInterval(() => {
                setTimer(timer => timer + 10)
            }, 10)

        if (!isRunning)
            clearInterval(interval)

        return () => clearInterval(interval)
    }, [isRunning])


    const handleSave = (time: Time) => {
        // fetch POST saveTime
        timeService.create(time.time)
            .then(({ data: savedTime }) => setTimes(savedTime))
            .catch(err => setError(err.message))

        setTimer(0)
    }

    return (
        <>
            <Center>
                <Box mb='50px' h='100px' w='250px' borderWidth='1px' borderRadius='lg' overflow='hidden' justifyContent='center'>
                    <Stack direction='row' spacing={0} justifyContent="center">
                        <Text fontSize='6xl'>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</Text>
                        <Text fontSize='6xl'>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</Text>
                        <Text fontSize='6xl'>{("0" + ((timer / 10) % 100)).slice(-2)}</Text>
                    </Stack>
                </Box>
            </Center>

            <Stack direction='row' spacing={5} justifyContent="center">
                <Button onClick={() => setIsRunning(true)} leftIcon={<FaPlay />} colorScheme='pink' variant='solid'>
                    Start
                </Button>
                <Button onClick={() => setIsRunning(false)} leftIcon={<FaStop />} colorScheme='pink' variant='solid'>
                    Stop
                </Button>
                <Button onClick={() => setTimer(0)} leftIcon={<RxReset />} colorScheme='pink' variant='solid'>
                    Reset
                </Button>
                <Button /*onClick={() => handleSave()}*/ leftIcon={<FaSave />} colorScheme='pink' variant='solid'>
                    Save
                </Button>
            </Stack>
        </>
    )
}

export default Stopwatch