import { Box, Button, Center, Stack, Text } from '@chakra-ui/react'
import { FaPlay, FaStop, FaSave } from 'react-icons/fa'
import { RxReset } from 'react-icons/rx'
import { useEffect, useState } from 'react'
import timeService from '../services/time-service'
import useTimes from '../hooks/useTimes'

const Stopwatch = () => {
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [storeTime, setStoreTime] = useState(false)
    const { times, setTimes, error, setError } = useTimes()
    const updateList = () => setStoreTime(!storeTime)

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


    const handleSave = (id: number, time: number) => {
        const newSaveTime = { id, time }
        setTimes([newSaveTime, ...times])

        // fetch POST saveTime
        timeService.create({ id, time })
            .then(({ data: savedTime }) => {
                setTimes([savedTime, ...times])
            })
            .then(() => updateList())
            .catch(err => setError(err.message))

        setTimer(0)
    }

    return (
        <>
            <Center>
                {error && <Text>{error}</Text>}
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
                <Button onClick={() => handleSave(0, timer)} leftIcon={<FaSave />} colorScheme='pink' variant='solid'>
                    Save
                </Button>
            </Stack>
        </>
    )
}

export default Stopwatch