import { ChakraProvider, Text, Box, Link, Flex } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <ChakraProvider>
            <Box bg='black' w='100%' p={4} color='white'>
            <Flex align="center" justify="space-between" px={8}>
                <Text>© 2024 Dio Bank</Text>
                <Flex>
                    <Link href="https://www.example.com" isExternal mr={4}>Link 1</Link>
                    <Link href="https://www.example.com" isExternal mr={4}>Link 2</Link>
                    <Link href="https://www.example.com" isExternal>Link 3</Link>
                </Flex>
            </Flex>
</Box>
        </ChakraProvider>
    )
}