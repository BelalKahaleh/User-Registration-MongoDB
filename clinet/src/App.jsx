import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/register">Register</Link> |
          <Link to="/login">Login</Link> |
          {authenticated && <button onClick={handleLogout}>Logout</button>}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/profile"
            element={authenticated ? <Profile /> : <h1>You need to be logged in to access your profile</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
