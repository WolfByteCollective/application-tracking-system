import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import ProfilePage from './components/profile/ProfilePage';
import Skills from './components/Skills';
import ExperienceLevel from './components/ExperienceLevel';
import Locations from './components/Locations';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import MatchesPage from './components/MatchesPage';
import LoginPage from './components/LoginPage';

function MainContent({ setIsLoggedIn }) {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      axios
				.get('http://localhost:5001/recruiterprofile', {
					headers: {
						userid: userId,
						Authorization: `Bearer ${token}`
					}
				})
				.then((res) => {
          setUserProfile(res.data);
        })
    }

    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, [setIsLoggedIn]);

  if (!userProfile) {
    return <div>Loading...</div>; // A fallback while loading the profile
  }

  return (
    <div className="main-content">
      <div className="top-left">
        <ProfilePage profile={userProfile} />
      </div>
      <div className="bottom-right">
        {/* <Skills />
        <ExperienceLevel />
        <Locations /> */}
      </div>
     </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <div className="app-container">
          {isLoggedIn && <Sidebar setIsLoggedIn={setIsLoggedIn} />}
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/main" /> : <LoginPage />} />
            <Route
              path="/main"
              element={isLoggedIn ? <MainContent setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />}
            />
            <Route
              path="/matches"
              element={isLoggedIn ? <MatchesPage /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
