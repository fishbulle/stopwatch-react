const showTime = (time: number) => {
    const minutes = Math.floor((time / 60000) % 60)
    const seconds = Math.floor((time / 1000) % 60)
    const milliseconds = (time / 10) % 100

    if (minutes < 1)
        return `${seconds}s ${milliseconds}ms`

    return `${minutes}m ${seconds}s ${milliseconds}ms`
}

export default showTime