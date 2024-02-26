import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Import the Redux store
import LandingPage from './Main-Components/LandingPage/LandingPage'; // Update the path
import VerifyUser from './Main-Components/VerifyUserPage/VerifyUser'; // Update the path
import HomePage from './Main-Components/HomePage/HomePage'; // Update the path
// import AuthRouteGuard from '../src/guards/AuthRouteGuard'; // Import the AuthRouteGuard component
import './App.css'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    {/* LandingPage does not require authentication */}
                    <Route path="/" element={<LandingPage />} />
                    {/* VerifyUser does not require authentication */}
                    <Route path="/user-info" element={<VerifyUser />} />
                    {/* HomePage requires authentication */}
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
