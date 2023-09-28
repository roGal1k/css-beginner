import React from 'react';
import style from './App.module.css'

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Home from './Components/Pages/Home/Home'
import Library from './Components/Pages/Library/Library' 
import Community from './Components/Pages/Community/Community' 
import Templates from './Components/Pages/Templates/Templates'
import Editor from './Components/Pages/Editor/Editor' 

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
        return <Templates/>
      default: 
        return <Home/>
      }
  }

  return (
    <div className="App">
      <header className="App-header">   
      </header>
      <main className={style.main} >
        <Header setCurrentPage={setCurrentPage} />
        {renderComponent()}
      </main>
      <Footer/>
    </div>
  );
}

export default App;