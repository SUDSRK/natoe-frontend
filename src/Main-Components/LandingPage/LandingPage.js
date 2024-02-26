import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated, togglePopup } from '../../store/authSlice'; // Import togglePopup action creator
import './landing.scss';
import AuthorizationPopup from '../../Shared-Components/Authorization-Popup/AuthorizationPopup';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";

const LandingPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const showPopup = useSelector(state => state.auth.showPopup);


    const handleLogin = useGoogleLogin({
        onSuccess: () => {
            dispatch(setAuthenticated());
            navigate('/user-info');
        },
    });

    const handleTogglePopup = () => {
        // Dispatch togglePopup action
        dispatch(togglePopup());
    };

    return (
        <section className="App">
            <div className="App__logo">
                <img className="App__logo_img" src="MainLogo.png" alt="Your Logo" />
            </div>
            <section className="App__first-section">
                <div className="App__first-section__content">
                    <div className="App__first-section__text">
                        <h1 className="slide-in-h1">Social media using AI & Automation</h1>
                        <p className="slide-in-p">Create, schedule, publish and easily manage your social media content at scale with Natoe.ai.</p>
                        <div className="App__first-section__text_button">
                            <button onClick={handleTogglePopup} className="route-button">Start Free Trial</button>
                        </div>
                    </div>

                    <div className="App__first-section__image">
                        <img src="https://images.pexels.com/photos/20224156/pexels-photo-20224156/free-photo-of-smiling-women-lying-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="item" />
                    </div>
                </div>
            </section>
            <AuthorizationPopup show={showPopup} handleClose={handleTogglePopup}>
                <button type="button" className="selection-button" onClick={() => handleLogin()}>
                    <FcGoogle className="mr-4" /> Sign in with Google
                </button>
            </AuthorizationPopup>
        </section>
    );
};

export default LandingPage;
