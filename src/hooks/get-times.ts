import axios from "axios";
import { useEffect, useState } from "react"

export interface SavedTimes {
    id: number,
    time: number
}

interface GetTimesResponse {
    reults: SavedTimes[]
}

const useSavedTimes = () => {
    const [savedTimes, setSavedTimes] = useState<SavedTimes[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get<GetTimesResponse>('https://localhost:8080/listTimes')
        .then(res => setSavedTimes(res.data.reults))
        .catch(err => setError(err.message))
    }, [])

    return { savedTimes, error }
}

export default useSavedTimes