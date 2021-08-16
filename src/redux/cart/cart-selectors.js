import { createSelector } from "reselect";
const selectcart= state=> state.cart;
export const selectCartItems = createSelector(
[selectcart],
(cart)=> cart.cartItems
)
export const selectCartItemsCount = createSelector(
[selectCartItems],
cartItems=>cartItems.reduce((accumulatedQuantity,cartItem)=>(cartItem.quantity+accumulatedQuantity),0)
)
export const selectCartHidden = createSelector(
[selectcart],
cart=>cart.hidden)

export const selectCartTotal = createSelector(
[selectCartItems],
cartItems=>cartItems.reduce((accumulatedQuantity,cartItem)=>(cartItem.quantity*cartItem.price+accumulatedQuantity),0)

)