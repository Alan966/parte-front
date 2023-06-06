import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import backend from "../../../Templates/backend"
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await axios.get(`${backend.url_base}/categories`)
    return response.data
})

const initialState = {
    success: false,
    message: null,
    categories: [],
    loading: false
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true
                state.success = false
                state.message = null
                state.categories = []
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.message = action.payload.message
                state.categories = action.payload.categorys
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.success = false
                state.message = null
                state.categories = []
            })
    }
})

export default categoriesSlice.reducer