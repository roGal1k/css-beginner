import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">   
      </header>
      <body>
        <Header/>
        <div>
          <Sidebar/>
          <Home/>
        </div>
        <Footer/>
      </body>
    </div>
  );
}

export default App;