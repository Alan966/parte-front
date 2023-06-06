import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import backend from "../../../Templates/backend"
export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    const response = await axios.get(`${backend.url_base}/articles/list`);
    return response.data
});

const initialState = {
    success: false,
    message: null,
    artilces:[]
}


const createListArticlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.success = false
                state.message = 'Dios plan ...'
                state.artilces = []
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.success = action.payload.success
                state.message = action.payload.message
                state.artilces = action.payload.articles
            })
            .addCase(fetchArticles.rejected, (state,  action) => {
                state.success = action.payload.success
                state.message = action.payload.message
                state.artilces = []
            })
    }
})


export default createListArticlesSlice.reducer;