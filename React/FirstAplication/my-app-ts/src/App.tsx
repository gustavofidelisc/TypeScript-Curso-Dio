import{useState} from "react";
import { Layout } from "./components/Layout";
import { ChakraProvider, Box} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";

/**
 * Create a component to assist in refactoring the code later.
 *
 * Note that if a component doesn't have a closing tag, in React, it requires one. For example, in React, describe an <img> tag as <img></img>.
 *
 * Another important point to consider is to avoid exporting sibling components directly. To address this issue, you can use React.Fragment or <></>.
 */

// preenche toda a tela minHeight={'100.h'}
function App() {
  
  return (
    <BrowserRouter>
    <ChakraProvider>
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/conta' element={<Conta/>} />
      </Routes>
      </Layout>
    </ChakraProvider>
      
    </BrowserRouter>
    
    
  );
}

export default App;
