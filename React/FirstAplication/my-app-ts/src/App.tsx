import{useState} from "react";
import { Layout } from "./components/Layout";
import { ChakraProvider, Box} from "@chakra-ui/react";
import {CardLogin } from "./components/Login/CardLogin";

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
    <ChakraProvider >
      <Layout>
        <Box padding="163px" backgroundColor="#171a4a" display="flex"  justifyContent="center">
          <CardLogin/>
        </Box>
      </Layout>
    </ChakraProvider>
    
  );
}

export default App;
