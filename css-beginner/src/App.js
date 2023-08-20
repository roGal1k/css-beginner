import React from 'react';

import Header from './Header/Header';
//import Footer from './Footer/Footer'
import Home from './Pages/Home/Home'
import Library from './Pages/Library/Library' 
import Community from './Pages/Community/Community' 
import Templaytes from './Pages/Templaytes/Templaytes'
import Editor from './Pages/Editor/Editor' 

function App() {
  const [currentPage, setCurrentPage] = React.useState('Home');

  const renderComponent = () => {
    switch (currentPage){
      case 'Home':
        return <Home/>
      case 'Library':
        return <Library/>
      case 'Community':
        return <Community/>
      case 'Editor':
        return <Editor/>
      case 'Templates':
        return <Templaytes/>
      default: 
        return <Home/>
      }
  }

  //style={{backgroundColor:'#1C1C1E', height:'98.78vh', width:'99.7%', margin:'0', padding:'0'}}

  return (
    <div className="App">
      <header className="App-header">   
      </header>
      <main >
        <Header setCurrentPage={setCurrentPage} />
        {renderComponent()}
      </main>
    </div>
  );
}

export default App;