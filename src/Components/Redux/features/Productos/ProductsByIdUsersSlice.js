const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
import axios from "axios";
import backend from "../../../Templates/backend";

export const getProducts = createAsyncThunk('products/getProducts', async(id_users) => {
    const response = await axios.get(`${backend.url_base}/productos/id_users/${id_users}`)
    return response.data
})


const initialState = {
    success: false,
    message: null,
    products: [],
}

const productsByIdUserSlice = createSlice({
    name: 'productsByIdUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.success = false
            state.message = null
            state.products = state.products
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.success = action.payload.success
            state.message = action.payload.message
            state.products = action.payload.products
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.success = action.payload.success
            state.message = action.payload.message
            state.products = []
        })
    }
})

export default productsByIdUserSlice.reducer