import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success: false,
    message: null,
    productos: [],
    category: null
};

export const productosSlice = createSlice({
    name: 'productos',
    initialState,
    reducers:{
        getProductosState: (state) => {
            state.success = false,
            state.message = 'Dios plan ...',
            state.productos = []
        },
        getProductosSuccess : (state, action) => {
            state.success = action.payload.success,
            state.message = action.payload.message,
            state.productos = action.payload.productos
            state.category = action.payload.category
        },
        getProductosFailure: (state, action) => {
            state.success = action.payload.success,
            state.message = action.payload.message
        }
    }
});

export const {getProductosState, getProductosSuccess, getProductosFailure} = productosSlice.actions;

export const getProductos = (id_category) => async (dispatch) => {
    dispatch(getProductosState());
    try{
        const response = await fetch(`https://parte-backend-ecommerce.onrender.com/productos/id_category/${id_category}`);
        const data = await response.json();
        dispatch(getProductosSuccess(data));
    }
    catch(err){
        dispatch(getProductosFailure(err));
    }
};

export default productosSlice.reducer;