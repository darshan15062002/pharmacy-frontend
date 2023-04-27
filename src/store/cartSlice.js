import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)

        },
        removeToCart(state, action) {
            return state.filter((item) => item._id !== action.payload)
        }
    }

})
export const { addToCart, removeToCart } = cartSlice.actions
export default cartSlice.reducer
