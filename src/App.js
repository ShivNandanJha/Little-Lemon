import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/routes/Home';
import Reservations from '../src/routes/Reservations';

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/reservations" element = {<Reservations />}/>
      </Routes>
    </>
    </div>
  );
}

export default App;
