import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        showCart: false,
        cartTotal: 0,
        cartQuantity: 0
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const isThere = state.cartItems.findIndex(item => item.id === newItem.id); //Check product existance
            if (isThere >= 0) {
                state.cartItems[isThere].quantity += 1; // update quantity if product exists
                state.cartTotal += newItem.price; // update cart total
                state.cartItems[isThere].total += newItem.price
            } else {
                state.cartItems.push({
                    id: newItem.id,
                    total: newItem.price,
                    price: newItem.price,
                    quantity: 1,
                    name: newItem.name
                });
                state.cartTotal += newItem.price
                state.cartQuantity += 1
            }
        },
        removeFromCart(state, action) {
            const item = state.cartItems.findIndex(itm => itm.id === action.payload);
            const FoundQtt = state.cartItems[item].quantity;
            if (FoundQtt > 1) {
                state.cartItems[item].quantity -= 1
                state.cartTotal -= state.cartItems[item].price 
            } else {
                state.cartQuantity -= 1;
                state.cartTotal -= state.cartItems[item].price
                state.cartItems.splice(item, 1);
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const CartAction = CartSlice.actions;
export default CartSlice