import create from './http-service'

export interface Time {
    id: number,
    time: number,
    date: number
}

export default create('/api/timer')