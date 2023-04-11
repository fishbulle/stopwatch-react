import { useEffect, useState } from "react"
import { ListItem, UnorderedList } from "@chakra-ui/react"
import axios from "axios";

interface Time {
    id: number,
    time: number
}

const GetTimes = () => {
    const [time, setTime] = useState<Time[]>()
    const [error, setError] = useState('')
    
    // fetch getTimes
    useEffect(() => {
        axios.get<Time[]>('https://localhost:8080/listTimes')
        .then(res => setTime(res.data))
        .catch(err => setError(err.message))
    }, [])

    return (
        <>
            <UnorderedList>
                    <ListItem></ListItem>
            </UnorderedList>

        </>
    )
}

export default GetTimes