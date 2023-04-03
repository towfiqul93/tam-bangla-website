import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {TCCHome} from "./TCCHome";
import {Login} from "./login";
import Dashboard from "./dashboard";

function App() {


  return (
     <Router>
      <Routes>
        <Route path="/" element={<TCCHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
                <Dashboard />
        
        } />
      </Routes>
    </Router>
  )
}

export default App
