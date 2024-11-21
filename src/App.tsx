import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import FullCardEmployee from './pages/fullCard/FullCardEmployee';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/employee/:id' element={<FullCardEmployee />}/>
      </Routes>
    </div>
  );
}

export default App;
