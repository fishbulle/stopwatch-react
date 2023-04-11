import { Button, Stack } from '@chakra-ui/react'
import { FaPlay, FaStop, FaSave } from 'react-icons/fa'
import { RxReset } from 'react-icons/rx'
import useTimer from '../hooks/useTimer'

const Stopwatch = () => {
    const { handleStart, handleReset, handleStop, handleSave } = useTimer(0)

    return (
        <>
            <Stack direction='row' spacing={5} justifyContent="center">
                <Button onClick={handleStart} leftIcon={<FaPlay />} colorScheme='pink' variant='solid'>
                    Start
                </Button>
                <Button onClick={handleStop} leftIcon={<FaStop />} colorScheme='pink' variant='solid'>
                    Stop
                </Button>
                <Button onClick={handleReset} leftIcon={<RxReset />} colorScheme='pink' variant='solid'>
                    Reset
                </Button>
                <Button onClick={handleSave} leftIcon={<FaSave />} colorScheme='pink' variant='solid'>
                    Save
                </Button>
            </Stack>
        </>
    )
}

export default Stopwatch