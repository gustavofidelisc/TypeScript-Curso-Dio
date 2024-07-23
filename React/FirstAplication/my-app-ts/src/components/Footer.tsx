import { ChakraProvider, Text, Box, Link, Flex } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Box bg='black' w='100%' p={4} color='white' position="absolute" bottom="0">
            <Flex align="center" justify="space-between" px={8}>
                <Text>© 2024 Dio Bank</Text>
                <Flex>
                    <Link href="https://www.example.com" isExternal mr={4}>Link 1</Link>
                    <Link href="https://www.example.com" isExternal mr={4}>Link 2</Link>
                    <Link href="https://www.example.com" isExternal>Link 3</Link>
                </Flex>
            </Flex>
        </Box>
    )
}
