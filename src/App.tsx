import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Stopwatch from './components/Stopwatch'
import ListTimes from './components/ListTimes'

function App() {
  
  return (
    <>
      <Grid templateAreas={`"nav nav"
                            "main main"`}
        gap='100'>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <Stopwatch />
          <ListTimes />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
