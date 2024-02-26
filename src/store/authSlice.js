import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        showPopup: false,
    },
    reducers: {
        setAuthenticated: state => {
            state.isAuthenticated = true;
        },
        setUnauthenticated: state => {
            state.isAuthenticated = false;
        },
        togglePopup: state => {
            state.showPopup = !state.showPopup;
        },
    },
});

export const { setAuthenticated, togglePopup, setUnauthenticated } = authSlice.actions;

export default authSlice.reducer;
