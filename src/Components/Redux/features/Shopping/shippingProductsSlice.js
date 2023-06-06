import backend from '../../../Templates/backend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

export const getProduct = createAsyncThunk('shippingProducts/getProducts', async (id_users) => {
    const response = await axios.get(`${backend.url_base}/shopping/id_user/${id_users}`)
    return response.data
})

const initialState = {
    success: false,
    message: null,
    products: []
}

const shippingProductsSlice = createSlice({
    name: 'shippingProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProduct.pending, (state) => {
            state.success = false
            state.message = null
            state.products = state.products
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            state.success = action.payload.success
            state.message = action.payload.message
            state.products = action.payload.products
        })
        .addCase(getProduct.rejected, (state, action) => {
            state.success = false
            state.message = null
            state.products = []
        })
    }
})


export default shippingProductsSlice.reducer