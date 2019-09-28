import React, {Fragment} from 'react';
import Header from './components/Header'

import CategoriasProvider from './context/CategoriasContext';

function App() {
  return (
    <Fragment>
      <CategoriasProvider>
        <Header />
      </CategoriasProvider>

    </Fragment>
      
    
  );
}

export default App;
