import { Box, Center, Text, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Buttons from './Buttons'

const Stopwatch = () => {
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let interval: number | undefined;

        if (isRunning)
            interval = setInterval(() => {
                setTimer(timer => timer + 10)
            }, 10)

        if (!isRunning)
            clearInterval(interval)

        return () => clearInterval(interval)
    }, [isRunning])

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

            <Buttons timer={timer} setTimer={setTimer} setIsRunning={setIsRunning} />
        </>
    )
}

export default Stopwatch