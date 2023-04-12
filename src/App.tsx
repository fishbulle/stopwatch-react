import { Button, Grid, GridItem, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Buttons from './components/Buttons'

function App() {

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
          <Buttons />
          <TableContainer>
            <Table variant='striped' colorScheme='pink'>
              <Thead>
                <Tr>
                  <Th>Time</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td></Td>
                  <Td><Button>Delete</Button></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
