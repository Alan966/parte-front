import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSubCategories = createAsyncThunk('subCategories/fetchSubCategories', async () => {
    const response = await axios.get(`https://parte-backend-ecommerce.onrender.com/subcategories`);
    return response.data
});

const initialState = {
    success: false,
    message: null,
    subCategories: [],
    loading: false
}

const createSubCategorySlice = createSlice({
    name: 'subCategories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubCategories.pending, (state) =>{
                state.loading = true
                state.success = false
                state.message = null
                state.subCategories = []
            })
            .addCase(fetchSubCategories.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.message = action.payload.message
                state.subCategories = action.payload.subcategories
            })
            .addCase(fetchSubCategories.rejected, (state, action)=> {
                state.loading = false
                state.success = false
                state.message = null
                state.subCategories = []
            })
    }
});

export default createSubCategorySlice.reducer;