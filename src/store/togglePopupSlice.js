import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        showPopup: false, // Add showPopup state
    },
    reducers: {
        setAuthenticated: state => {
            state.isAuthenticated = true;
        },
        setUnauthenticated: state => {
            state.isAuthenticated = false;
        },
        togglePopup: state => {
            state.showPopup = !state.showPopup; // Toggle the showPopup state
        },
    },
});

export const { setAuthenticated, togglePopup, setUnauthenticated } = authSlice.actions;

export default authSlice.reducer;
