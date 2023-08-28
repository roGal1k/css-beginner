import React from 'react';
import style from './App.module.css'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home/Home'
import Library from './components/Pages/Library/Library' 
import Community from './components/Pages/Community/Community' 
import Templates from './components/Pages/Templates/Templates'
import Editor from './components/Pages/Editor/Editor' 

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