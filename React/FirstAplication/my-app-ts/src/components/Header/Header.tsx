import './Header.css'
import { ChakraProvider, Image, Flex, Text } from '@chakra-ui/react'
export const Header = () => {
    return(
        <ChakraProvider>
            <Flex className="header">
                <Image 
                boxSize='55px'
                src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" alt="Dio"
                ml='10px' />
                <Text fontSize='25' fontWeight='bold'
                fontFamily='Tahoma' color='white'  p={2} >Dio Bank
                </Text>
            </Flex>
        </ChakraProvider>
    )
}