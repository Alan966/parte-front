import backend from '../../../Templates/backend'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const deleteShopping = createAsyncThunk('deleteShopping/delete', async (id_product) => {
    const token = sessionStorage.getItem('token')
    const response = await axios.delete(`${backend.url_base}/shopping/id_shopping/${id_product}`, {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    console.log(response.data)
    return response.data
})


const initialState = {
    success: false,
    message: null
}


const deleteShoppingSlice = createSlice({
    name: 'deleteShopping',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(deleteShopping.pending, (state) => {
            state.success = false
            state.message = null
        })
        .addCase(deleteShopping.fulfilled, (state, action) => {
            state.success = action.payload.success
            state.message = action.payload.message
        })
        .addCase(deleteShopping.rejected, (state, action) => {
            state.success = action.payload.success
            state.message = action.payload.message
        })
    }
})

export default deleteShoppingSlice.reducer