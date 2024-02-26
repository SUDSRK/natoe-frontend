import React from 'react';
import './authorizationPopup.scss';

const AuthorizationPopup = ({ show, handleClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="authorization-popup">
            <div className="authorization-popup__overlay" onClick={handleClose} />
            <div className="authorization-popup__content">
                {children}
                <button type="button" className="authorization-popup__close-button" onClick={handleClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default AuthorizationPopup;
