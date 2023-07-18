import './App.css';
import { Home } from './components/home';
import { Certificate } from './components/certificate';
import { Projects } from './components/projects';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/projects" element={<Projects/>}></Route>
        <Route exact path="/certificate" element={<Certificate/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
