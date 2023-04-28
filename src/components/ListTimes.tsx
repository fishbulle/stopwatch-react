import { Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, TableCaption, Container, IconButton } from '@chakra-ui/react'
import useTimes from "../hooks/useTimes"
import timeService from "../services/time-service"
import showTime from './ShowTime'
import { Time } from '../services/time-service'
import { AiTwotoneDelete } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useSavedTimes from '../hooks/useSavedTimes'

const ListTimes = () => {
    const { times, setTimes, setError } = useTimes()
    const { data: savedTimes, error } = useSavedTimes()
    
    const handleDelete = (time: Time) => {
        setTimes(times.filter(t => t.id !== time.id))
        // Delete saved time fetch
        timeService.delete(time.id)
            .catch(err => setError(err.message))
    }

    if (error) return <p>{error.message}</p>

    return (
        <>
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
                            {savedTimes?.map((time: any) => (
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

export default ListTimes