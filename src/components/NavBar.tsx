import { HStack, Image } from "@chakra-ui/react"
import stopwatch from '../assets/stopwatch.png'
import ColorModeSwitch from "./ColorModeSwtich"


const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={stopwatch} boxSize="70px" />
            <h1>NÅN TITEL HÄR</h1>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar