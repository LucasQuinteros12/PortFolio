import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import About from './components/content/About';
import Home from './components/content/Home';
import Sidebar from './components/content/Sidebar';
import Contact from './components/content/Contact';
import Portfolio from './components/content/Portfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
