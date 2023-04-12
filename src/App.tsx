import { Button, Grid, GridItem, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Buttons from './components/Buttons'
import useTimes from './hooks/useTimes';

const calcTime = (time: number) => {

  const totalMin = Math.floor(time / 60);
  const sec = time % 60;
  const hrs = Math.floor(totalMin / 60);
  const min = totalMin % 60;

  if (hrs < 1 && min < 1) return sec + ' s';
  if (hrs < 1) return min + ' m  :  ' + sec + ' s';
  return hrs + ' h  :  ' + min + ' m  :  ' + sec + ' s';
}

function App() {

  const { times, setTimes, error, setError } = useTimes();

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`
      }}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          {/* tidtagaruret */}
          {/* <Buttons /> */}
          <TableContainer>
            <Table variant='striped' colorScheme='pink'>
              <Thead>
                <Tr>
                  <Th>Time</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {times.map(time =>
                  <Tr key={time.id}>
                    <Td>{calcTime(time.time)}</Td>
                    <Td><Button>Delete</Button></Td>
                  </Tr>)}
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
