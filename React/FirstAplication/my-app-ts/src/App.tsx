import { Labels } from "./components/Labels";
import { Layout } from "./components/Layout";
import styled from 'styled-components'
/**
 * Create a component to assist in refactoring the code later.
 *
 * Note that if a component doesn't have a closing tag, in React, it requires one. For example, in React, describe an <img> tag as <img></img>.
 *
 * Another important point to consider is to avoid exporting sibling components directly. To address this issue, you can use React.Fragment or <></>.
 */

function App() {
  return (
    <Layout>
      <h1> Faça o login</h1>
      <Labels 
        name={'Email'} 
        htmlfor={'emailInput'}
        type={'email'}
      />
      <Labels 
        name={'Senha'}
        htmlfor={'passwordInput'}
        type={'password'}
      />
      <button>
        entrar
      </button>
    </Layout>
  );
}

export default App;
