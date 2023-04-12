
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, TableCaption, Container } from "@chakra-ui/react"
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
                                <Th>Remove</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {times.map(time =>
                                <Tr key={time.id}>
                                    <Td>{showTime(time.time)}</Td>
                                    <Td></Td>
                                    <Td><Button size='sm'>Delete</Button></Td>
                                </Tr>)}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default ListTimes