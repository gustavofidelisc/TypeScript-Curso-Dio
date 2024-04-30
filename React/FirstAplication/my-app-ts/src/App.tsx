import React from 'react';
import {Card} from './components/Card'
/**
 * Create a component to assist in refactoring the code later.
 * 
 * Note that if a component doesn't have a closing tag, in React, it requires one. For example, in React, describe an <img> tag as <img></img>.
 * 
 * Another important point to consider is to avoid exporting sibling components directly. To address this issue, you can use React.Fragment or <></>.
 */

function App() {
  return (
    <> 
      Hello World
      <Card />
      <Card />
      <Card />
      <Card />
      <div>
        Footer
      </div>
    </>
    
  );
}

export default App;
