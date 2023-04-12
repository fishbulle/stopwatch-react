
import { Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, TableCaption, Container, IconButton } from '@chakra-ui/react'
import { AiTwotoneDelete } from 'react-icons/ai'
import useTimes from '../hooks/useTimes'
import timeService, { Time } from '../services/time-service'

const showTime = (timer: number) => {
    const hours = Math.floor(timer / 360000)
    const minutes = Math.floor((timer % 360000) / 6000)
    const seconds = Math.floor((timer % 6000) / 100)
    const milliseconds = timer % 100

    if (hours < 1 && minutes < 1) return `${seconds}s ${milliseconds}ms`
    if (hours < 1) return `${minutes}m ${seconds}s ${milliseconds}ms`
    return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`
}

function ListTimes() {
    const { times, setTimes, error, setError } = useTimes();

    const handleDelete = (time: Time) => {
        setTimes(times.filter(t => t.id !== time.id))

        // Delete saved time fetch
        timeService.delete(time.id)
            .catch(err => setError(err.message))
    }

    return (
        <>
            <Container maxW='md' centerContent>
                {error && <Text>{error}</Text>}
                <TableContainer>
                    <Table size='md' variant='striped' colorScheme='pink'>
                        <TableCaption>Saved Times</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Time</Th>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {times.map(time => (
                                <Tr key={time.id}>
                                    <Td>{showTime(time.time)}</Td>
                                    <Td></Td>
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

export default ListTimes