import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Verification from './Pages/Verification';
import Navbar from './Components/Navbar';
import CompanyVerification from './Pages/CompanyVerification';
import Bio from './Pages/Bio';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/company-verification" element={<CompanyVerification />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
