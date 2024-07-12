import { ChakraProvider } from "@chakra-ui/react"
import {AlertComponent} from '../../Alert'

export const AlertLogin = () => {

    return (
        <ChakraProvider>
            <AlertComponent status="success" variant='solid' message='Login efetuado com sucesso!'/>
        </ChakraProvider>
    )
}