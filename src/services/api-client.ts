import axios, { CanceledError } from 'axios'

export default axios.create({
    baseURL: 'https://localhost:8080'
})

export { CanceledError }