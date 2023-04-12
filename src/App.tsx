import { Button, Grid, GridItem, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Buttons from './components/Buttons'
import ListTimes from './components/ListSavedTImes'

function App() {

  return (
    <>
      <Grid templateAreas={`"nav nav"
                            "main main"
                            "footer footer"`}
            gap='20'>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <Stopwatch />
        </GridItem>
        <GridItem area="footer">
          <ListTimes />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
