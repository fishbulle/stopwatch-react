import { useState, useEffect } from 'react'
import timeService, { Time } from '../services/time-service'
import { CanceledError } from 'axios'

const useTimes = () => {
    const [times, setTimes] = useState<Time[]>([])
    const [error, setError] = useState('')
    
    useEffect(() => {
        const {request, cancel} = timeService.getAll<Time>()
        request
        .then(res => setTimes(res.data))
        .catch(err => {
            if (err instanceof CanceledError) return
            setError(err.message)
        })

        return () => cancel()
    }, [])

    return { times, setTimes, error, setError }
}

export default useTimes