import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success: false,
    message: null,
    article: null
}


export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticleState: (state) => {
            state.success = false,
            state.message = 'Dios plan ...',
            state.article = null
        },
        getArticleStateSuccess: (state, action) => {
            state.success = action.payload.success,
            state.message = action.payload.message,
            state.article = action.payload.article
        },
        getArticleStateFailure: (state, action) => {
            state.success = action.payload.success,
            state.message = action.payload.message
        }
    },
})


export const { getArticleState, getArticleStateSuccess, getArticleStateFailure } = articleSlice.actions;


export const getArticle = (id_promotion) => async (dispatch) => {
    dispatch(getArticleState());
    try{
        const response = await fetch(`https://parte-backend-ecommerce.onrender.com/articles/id_promotion/${id_promotion}`);
        const data = await response.json();
        dispatch(getArticleStateSuccess(data));
    }
    catch(err){
        console.log(err);
        getArticleStateFailure(err);
    }
}

export default articleSlice.reducer;