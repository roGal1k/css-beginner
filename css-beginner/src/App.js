import React from 'react';

import Header from './Header/Header';
//import Footer from './Footer/Footer'
//import Sidebar from './Sidebar/Sidebar'
import Home from './Pages/Home/Home'
//import Library from './Pages/Library/Library' 

function App() {
  return (
    <div className="App">
      <header className="App-header">   
      </header>
      <body>
        <Header/>
        {/*<Library/>*/}
        <Home/>
      </body>
    </div>
  );
}

export default App;