import create from './http-service'

export interface Time {
    id: number,
    time: number
}

export default create('/api/timer')