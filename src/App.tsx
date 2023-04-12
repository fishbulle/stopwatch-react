import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Stopwatch from './components/Stopwatch'
import ListTimes from './components/ListSavedTImes'

function App() {

  return (
    <>
      <Grid templateAreas={`"nav nav"
                            "main main"
                            "footer footer"`}
            gap='100'>
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
