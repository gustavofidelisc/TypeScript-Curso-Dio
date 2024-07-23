import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

// children, renderiza os componentes que estão no meio, tudo que está englobado pelo componente.

export const Layout = ({ children } : any) =>{
    return (
        <Box minHeight='100vh' backgroundColor="#171a4a">
            <Header/>
            { children }
            <Footer/>
        </Box>
    )
}