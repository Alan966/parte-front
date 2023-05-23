import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    success: false,
    message: null,
    productos:[],
    subcategory: null
}


export const productosBySubcategorySlice = createSlice({
    name: 'productosBySubcategory',
    initialState: InitialState,
    reducers:{
        getProductosState: (state) => {
            state.success = false,
            state.message = `Dios plan ...`,
            state.productos = []
        },
        getProductosSuccess: (state, action) => {
            state.success = action.payload.success,
            state.message = action.payload.message,
            state.productos = action.payload.productos,
            state.subcategory = action.payload.subcategory
        },
        getProductosFailure: (state, action) => {
            state.success = action.payload.success,
            state.message = action.payload.message
        }
    }
})


export const {getProductosState, getProductosSuccess, getProductosFailure} = productosBySubcategorySlice.actions;

export const getProductosBySubcategory = (id_subcategorie) => async (dispatch) => {
    dispatch(getProductosState());
    try {
        const resposne = await fetch(`https://parte-backend-ecommerce.onrender.com/productos/id_subcategory/${id_subcategorie}`)
        const data = await resposne.json();
        dispatch(getProductosSuccess(data));
    } catch (error) {
        dispatch(getProductosFailure(error));
    }
}

export default productosBySubcategorySlice.reducer;