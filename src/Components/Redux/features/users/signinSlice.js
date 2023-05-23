import {createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    success: false,
    message: null,
    token: null,
    email : null,
    id_user : null
}

export const signinSlice = createSlice({
    name: 'signin',
    initialState,
    reducers:{
        signinState: (state) => {
            state.success = false;
            state.message = null;
            state.token = null;
        },
        signinSuccess: (state, action) => {
            state.success = action.payload.success;
            state.message = action.payload.message;
            state.token = action.payload.auth_token;
            state.email = action.payload.email;
            state.id_user = action.payload.id_user;
        },
        signinFailure: (state, action) => {
            state.success = action.payload.success;
            state.message = action.payload.message;
        }
    }
});

export const { signinState, signinSuccess, signinFailure } = signinSlice.actions;

export const signinAction = (FormData) => async (dispatch) => {
    dispatch(signinState());
    try{
        const response = await axios.post('https://parte-backend-ecommerce.onrender.com/signin', FormData);
        dispatch(signinSuccess(response.data));
    }
    catch(err){
        dispatch(signinFailure(err.response.data));
    }
}

export default signinSlice.reducer;