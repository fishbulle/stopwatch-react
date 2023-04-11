import { ListItem, Text, UnorderedList } from '@chakra-ui/react'
import useSavedTimes from "../hooks/get-times"

const TimeList = () => {
    const { savedTimes, error } = useSavedTimes();

    return (
        <>
        {error && <Text>{error}</Text>}
        {savedTimes.map(times => (
            <UnorderedList>
                <ListItem key={times.id}>
                   
                </ListItem>
            </UnorderedList>
        ))}
        </>
    )
}

export default TimeList