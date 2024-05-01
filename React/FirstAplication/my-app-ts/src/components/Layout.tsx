import { Footer } from "./Footer"
import { Header } from "./Header/Header"

// children, renderiza os componentes que estão no meio, tudo que está englobado pelo componente.

export const Layout = ({ children } : any) =>{
    return (
        <>
            <Header/>
            { children }
            <Footer/>
        </>
    )
}