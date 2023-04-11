import { Grid, GridItem, Show } from '@chakra-ui/react'
import Stopwatch from "./components/Stopwatch"
import NavBar from './components/NavBar'

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
          <Stopwatch />
          {/* <SavedTimes /> */}
        </GridItem>
      </Grid>
    </>
  )
}

export default App
