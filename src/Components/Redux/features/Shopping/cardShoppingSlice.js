import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import backend from "../../../Templates/backend";
export const postProduct = createAsyncThunk('carShopping/product', async ({token, data}) => {
    const response = await axios.post(`${backend.url_base}/shopping/create`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data
})

const initialState = {
    success: false,
    message: null,
}

const cardShoppingSlice = createSlice({
    name: 'cardShopping',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(postProduct.pending, (state) => {
            state.success = false
            state.message = null
        })
        .addCase(postProduct.fulfilled, (state, action) => {
            state.success = action.payload.success
            state.message = null
        })
        .addCase(postProduct.rejected, (state, action) => {
            state.success = false
            state.message = false
        })
    }
})

export default cardShoppingSlice.reducer