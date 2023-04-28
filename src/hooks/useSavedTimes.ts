import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { Time } from "../services/time-service";

const useSavedTimes = () => {
    const fetchSavedTime = () =>
        axios
            .get<Time[]>('http://localhost:8080/api/timer')
            .then(res => res.data)

    return useQuery<Time[], Error>({
        queryKey: ['times'],
        queryFn: fetchSavedTime,
        refetchInterval: 1000
    })
}

export default useSavedTimes