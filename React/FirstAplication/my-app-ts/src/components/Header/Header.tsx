import './Header.css'
import { ChakraProvider, Image, Flex, Text } from '@chakra-ui/react'
export const Header = () => {
    return(
        <ChakraProvider>
            <Flex className="header">
                <Image 
                boxSize='50px'
                src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png" alt="Dio"
                ml='10px'/>
                <Text fontSize='2xl' fontWeight='bold'
                fontFamily='Tahoma' color='white'  p={2} >DIO Bank
                </Text>
            </Flex>
        </ChakraProvider>
    )
}