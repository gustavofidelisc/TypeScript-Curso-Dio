import { ChakraProvider, Alert, AlertIcon, Box } from "@chakra-ui/react";

interface IAlert {
    status: "info" | "warning" | "success" | "error" | "loading" | undefined,
    variant: string
    message: string
}

export const AlertComponent = ({status, variant, message} : IAlert) => {
    return (
        <ChakraProvider>
            <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
                <Alert status={status} variant={variant}>
                    <AlertIcon />
                    {message}
                </Alert>
            </Box>
        </ChakraProvider>
    )
}