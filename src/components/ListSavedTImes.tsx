
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, TableCaption, Container, IconButton } from "@chakra-ui/react"
import { AiTwotoneDelete } from 'react-icons/ai'
import useTimes from "../hooks/useTimes";
import showTime from "./Stopwatch";

function ListTimes() {
    const { times } = useTimes();

    return (
        <>
            <Container maxW='md' centerContent>
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