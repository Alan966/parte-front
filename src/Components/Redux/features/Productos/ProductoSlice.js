const { createSlice } = require("@reduxjs/toolkit");


const initialState = []


export const productSlice = createSlice({
    name: 'prodcuto',
    initialState,
    reducers: {
        productAdd: (state, action) => {
            if(state.length > 0){
                state.splice(0, state.length);
            }
            state.push(action.payload);
        },
        productDelete: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export const { productAdd, productDelete } = productSlice.actions;
export default productSlice.reducer;