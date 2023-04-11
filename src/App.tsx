import { Grid, GridItem, Show } from '@chakra-ui/react'
import Stopwatch from "./components/Stopwatch"
import NavBar from './components/NavBar'

function App() {
 

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            Saved Times Here
          </GridItem>
        </Show>
        <GridItem area="main">
          <Stopwatch />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
