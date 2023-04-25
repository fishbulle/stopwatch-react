import { Box, Center, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, TableCaption, Container, IconButton, Button, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import timeService from "../services/time-service"
import { AiTwotoneDelete } from 'react-icons/ai'
import { FaPlay, FaSave, FaStop } from "react-icons/fa"
import { RxReset } from "react-icons/rx"
import showTime from './ShowTime'
import { Time } from '../services/time-service'
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

    const handleSave = (id: number, time: number, date: number) => {
        // fetch POST saveTime
        timeService.create({ id, time, date })
            .then(({ data: savedTime }) => {
                setTimes([savedTime, ...times])
            })
            .catch(err => setError(err.message))

        setTimer(0)
    }

    const handleDelete = (time: Time) => {
        setTimes(times.filter(t => t.id !== time.id))
        // Delete saved time fetch
        timeService.delete(time.id)
            .catch(err => setError(err.message))
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
                <Button onClick={() => handleSave(0, timer, 0)} leftIcon={<FaSave />} colorScheme='pink' variant='solid'>
                    Save
                </Button>
            </Stack>

            <Container mt="50px" maxW='lg' centerContent>
                {error && <Text>{error}</Text>}
                <TableContainer>
                    <Table size='md' variant='striped' colorScheme='pink'>
                        <TableCaption mb='20px'>Saved Times</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Time</Th>
                                <Th>Date</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {times.map(time => (
                                <Tr key={time.id}>
                                    <Td>{showTime(time.time)}</Td>
                                    <Td>{time.date}</Td>
                                    <Td>
                                        <IconButton
                                            onClick={() => handleDelete(time)}
                                            size='sm'
                                            aria-label='Delete'
                                            icon={<AiTwotoneDelete />} />
                                    </Td>
                                </Tr>))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default Stopwatch