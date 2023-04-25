import { Button, Stack } from "@chakra-ui/react"
import useTimes from "../hooks/useTimes"
import timeService from "../services/time-service"
import { FaPlay, FaSave, FaStop } from "react-icons/fa"
import { RxReset } from "react-icons/rx"

interface Props {
    timer: number,
    setTimer: React.Dispatch<React.SetStateAction<number>>,
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
}

const Buttons = ({ timer, setTimer, setIsRunning }: Props) => {
    const { times, setTimes, setError } = useTimes()

    const handleSave = (id: number, time: number, date: number) => {
        const originalTimes = [...times]
        const newTime = { id, time, date }

        // fetch POST saveTime
        timeService.create(newTime)
            .then(({ data: savedTime }) =>
                setTimes([savedTime, ...times]))
            .catch(err => {
                setError(err.message)
                setTimes(originalTimes)
            })

        setTimer(0)

        // hur får jag tiden att synaas direkt i listan utan att behöva refresha? 
    }

    return (
        <>
            <Stack direction='row' spacing={5} justifyContent="center">
                <Button onClick={() => setIsRunning(true)} leftIcon={<FaPlay />} colorScheme='pink' variant='solid'>
                    Start
                </Button>
                <Button onClick={() => setIsRunning(false)} leftIcon={<FaStop />} colorScheme='pink' variant='solid'>
                    Stop
                </Button>
                <Button onClick={() => setTimer(0)} leftIcon={<RxReset />} colorScheme='pink' variant='solid'>
                    Reset
                </Button>
                <Button onClick={() => handleSave(0, timer, 0)} leftIcon={<FaSave />} colorScheme='pink' variant='solid'>
                    Save
                </Button>
            </Stack>
        </>
    )
}

export default Buttons