import { HStack, Image, Heading } from "@chakra-ui/react"
import stopwatch from '../assets/stopwatch.png'
import ColorModeSwitch from "./ColorModeSwtich"


const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='50px'>
            <Image src={stopwatch} boxSize="70px" />
            <Heading as='h2' size='lg'>STOPWATCH</Heading>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar