import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Addmovie from './components/Addmovie';
import Addreview from './components/Addreview';





function App() {
  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/addmovie" element={<Addmovie />} />
  <Route path="/addreview" element={<Addreview />} />
</Routes>
  );
}

export default App;
