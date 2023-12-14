
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className="container">
        <h1>Olá</h1>
        <Outlet />
      </div>
    </div>
      
  )
}

export default App