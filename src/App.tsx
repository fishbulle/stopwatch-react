import { Grid, GridItem } from '@chakra-ui/react'
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
          {/* lista sparade tider */}
        </GridItem>
      </Grid>
    </>
  )
}

export default App
