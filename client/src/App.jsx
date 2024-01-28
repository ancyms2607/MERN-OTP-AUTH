
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Insert from './components/Insert';
import Verify from './components/Verify';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Insert />} />
      <Route path="/verify/:email" element={<Verify />} /> 
      <Route path="/welcome" element={<Welcome/>} />
      </Routes>
    </div>
  );
}

export default App;
