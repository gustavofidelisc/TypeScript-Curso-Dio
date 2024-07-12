import { ChakraProvider, Input, Box, Center, Button } from "@chakra-ui/react";
import { text } from "stream/consumers";
interface IMyButton {
    event: ()=> void,
    colorScheme: string,
    size: string,
    width: string,
    marginTop: string,
    text: string
}

export const MyButton = ( {event, colorScheme, size, width, marginTop, text} : IMyButton) => {
    return (
        <ChakraProvider>
            <Button onClick={event} colorScheme={colorScheme} size={size} width={width} marginTop={marginTop} >
                 {text}
            </Button>
        </ChakraProvider>
    )   
}