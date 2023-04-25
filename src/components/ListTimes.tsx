// import { Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, TableCaption, Container, IconButton, Button, Stack } from '@chakra-ui/react'
// import useTimes from "../hooks/useTimes"
// import timeService from "../services/time-service"
// import { AiTwotoneDelete } from 'react-icons/ai'
// import { FaPlay, FaSave, FaStop } from "react-icons/fa"
// import { RxReset } from "react-icons/rx"
// import showTime from './ShowTime'
// import { Time } from '../services/time-service'

// interface Props {
//     timer: number,
//     setTimer: React.Dispatch<React.SetStateAction<number>>,
//     setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
// }

// const ListTimes = () => {
//     const { times, setTimes, error, setError } = useTimes()

//     const handleSave = (id: number, time: number, date: number) => {
//         const newTime = {
//             id: id,
//             time: time,
//             date: date
//         }
//         // fetch POST saveTime
//         timeService.create(newTime)
//             .then(res => setTimes(res.data))
//             .catch(err => setError(err.message))

//         setTimer(0)

//         // hur får jag tiden att synaas direkt i listan utan att behöva refresha? 
//     }

//     const handleDelete = (time: Time) => {
//         setTimes(times.filter(t => t.id !== time.id))
//         // Delete saved time fetch
//         timeService.delete(time.id)
//             .catch(err => setError(err.message))
//     }

//     return (
//         <>
//             <Stack direction='row' spacing={5} justifyContent="center">
//                 <Button onClick={() => setIsRunning(true)} leftIcon={<FaPlay />} colorScheme='pink' variant='solid'>
//                     Start
//                 </Button>
//                 <Button onClick={() => setIsRunning(false)} leftIcon={<FaStop />} colorScheme='pink' variant='solid'>
//                     Stop
//                 </Button>
//                 <Button onClick={() => setTimer(0)} leftIcon={<RxReset />} colorScheme='pink' variant='solid'>
//                     Reset
//                 </Button>
//                 <Button onClick={() => handleSave(0, timer, 0)} leftIcon={<FaSave />} colorScheme='pink' variant='solid'>
//                     Save
//                 </Button>
//             </Stack>

//             <Container mt="50px" maxW='lg' centerContent>
//                 {error && <Text>{error}</Text>}
//                 <TableContainer>
//                     <Table size='md' variant='striped' colorScheme='pink'>
//                         <TableCaption mb='20px'>Saved Times</TableCaption>
//                         <Thead>
//                             <Tr>
//                                 <Th>Time</Th>
//                                 <Th>Date</Th>
//                                 <Th></Th>
//                             </Tr>
//                         </Thead>
//                         <Tbody>
//                             {times.map(time => (
//                                 <Tr key={time.id}>
//                                     <Td>{showTime(time.time)}</Td>
//                                     <Td>{time.date}</Td>
//                                     <Td>
//                                         <IconButton
//                                             onClick={() => handleDelete(time)}
//                                             size='sm'
//                                             aria-label='Delete'
//                                             icon={<AiTwotoneDelete />} />
//                                     </Td>
//                                 </Tr>))}
//                         </Tbody>
//                     </Table>
//                 </TableContainer>
//             </Container>
//         </>
//     )
// }

// export default ListTimes