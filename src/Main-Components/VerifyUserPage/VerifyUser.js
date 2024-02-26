import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setInvalid } from '../../store/emailSlice'; // Import actions from emailSlice
import './verifyuser.scss';

const VerifyUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector(state => state.email.value);
    const isValid = useSelector(state => state.email.isValid);

    const handleEmailChange = (event) => {
        dispatch(setEmail(event.target.value));
    };

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleVerify = () => {
        if (isValidEmail(email)) {
            // Dispatch action to set email as valid
            dispatch(setInvalid(false));

            // Navigate to the home page
            navigate('/home');

            // Other actions upon verification
        } else {
            // Dispatch action to set email as invalid
            dispatch(setInvalid(true));
        }
    };

    return (
        <div className="verify-user-container">
            <div className="verify-user-form">
                <h1 className="title">Verify User</h1>
                <h2 className="subtitle">Enter your email below</h2>
                <div className="input-container">
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange}
                        className={`verify-user-input ${!isValid && 'invalid'}`}
                    />
                    <button onClick={handleVerify} className="verify-user-button">Verify</button>
                </div>
                {!isValid && <p className="warning">Please enter a valid email</p>}
            </div>
        </div>
    );
};

export default VerifyUser;
