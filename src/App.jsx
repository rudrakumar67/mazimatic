// Packeage
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
      <div className="app">
        <Router>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
    </Router>  
      </div>
  )
}

export default App;