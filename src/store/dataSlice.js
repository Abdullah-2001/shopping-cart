import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const itemIndex = state.cart.findIndex((item) => item.id === payload.id)
            if (itemIndex >= 0) {
                const quantity = state.cart[itemIndex].Qty += 1
                state.cart[itemIndex].totalPrice = payload.price * quantity
                if (state.cart[itemIndex].availablity > 0) {
                    state.cart[itemIndex].availablity = payload.availablity - quantity
                }
            }
            else {
                state.cart.push({
                    ...payload,
                    totalPrice: payload.price,
                })
            }
        },
        removeFromCart: (state, { payload }) => {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload.id)
            }
        },
        increase: (state, { payload }) => {
            const itemIndex = state.cart.findIndex((item) => item.id === payload.id)
            if (itemIndex >= 0) {
                const incQuantity = state.cart[itemIndex].Qty += 1
                state.cart[itemIndex].totalPrice = payload.price * incQuantity
            }
            else {
                console.log('qty not increase');
            }
        },
        decrease: (state, { payload }) => {
            const itemIndex = state.cart.findIndex((item) => item.id === payload.id)
            if (state.cart[itemIndex].Qty > 0) {
                const decQuantity = state.cart[itemIndex].Qty -= 1
                state.cart[itemIndex].totalPrice = payload.price * decQuantity
            }
            else {
                console.log('qty not decrease');
            }
        },
    }
})

export const getCartItems = ((state) => state.cart.cart)

export const itemPrice = (state) => {
    return state.cart.cart.reduce((prev, current) => {
        return prev + current.totalPrice
    }, 0)
}

export const { addToCart, removeFromCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;