import { Grid, GridItem, ListItem, UnorderedList } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Buttons from './components/Buttons'
import GetTimes from './components/ListSavedTImes'

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
        </GridItem>
      </Grid>
    </>
  )
}

export default App
