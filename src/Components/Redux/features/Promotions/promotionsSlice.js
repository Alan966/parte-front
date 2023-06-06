import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import backend from "../../../Templates/backend";

export const fetchPromotions = createAsyncThunk('promotions/fetchPromotions', async () => {
    const response = await axios.get(`${backend.url_base}/promotions`)
    return response.data
})

const  initialState = {
    success: false,
    message: null,
    promotions: [],
    loading: false
}


const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPromotions.pending, (state) => {
                state.loading = true,
                state.success = false
                state.message = null
                state.promotions = []
            })
            .addCase(fetchPromotions.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.message = action.payload.message
                state.promotions = action.payload.promotions
            })
            .addCase(fetchPromotions.rejected, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.message = action.payload.message
                state.promotions = []
            })
    }
})

export default promotionsSlice.reducer