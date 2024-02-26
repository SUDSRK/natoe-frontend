import { createSlice } from '@reduxjs/toolkit';

const emailSlice = createSlice({
    name: 'email',
    initialState: {
        value: '',
        isValid: true,
    },
    reducers: {
        setEmail: (state, action) => {
            state.value = action.payload;
            state.isValid = true;
        },
        setInvalid: (state) => {
            state.isValid = false;
        },
    },
});

export const { setEmail, setInvalid } = emailSlice.actions;

export default emailSlice.reducer;
