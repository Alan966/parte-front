import backend from '../../../Templates/backend';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
    success: false,
    message: null,
};

export const userSlice = createSlice(
    {
    name: 'users',
    initialState,
    reducers: {
        addUserState: (state) => {
            state.success = false;
            state.message = null;
        },
        addUserSuccess: (state, action) => {
            state.success = action.payload.success
            state.message = action.payload.message
        },
        addUserFailure: (state, action) => {
            state.success = action.payload.success;
            state.message = action.payload.message;
        }
    }
});

export const { addUserState, addUserSuccess, addUserFailure } = userSlice.actions;

export const addUser = (FormData) => async (dispatch) => {
    dispatch(addUserState());
    try {
        const response = await axios.post(`${backend.url_base}/signup`, FormData);
        dispatch(addUserSuccess(response.data));
    } catch (error) {
        dispatch(addUserFailure(error.response.data));
    }
}

export default userSlice.reducer;