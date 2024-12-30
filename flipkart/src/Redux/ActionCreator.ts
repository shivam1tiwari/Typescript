import { SET_USER,LOGOUT_USER,ADD_TO_CART,REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,CLEAR_CART_ITEM } from "./ActionType.ts"

export const setUser = (user)=>{
  return{
    type : SET_USER,
    payload : user
  }
}

export const  logoutUser = ()=>{
  return{
    type:LOGOUT_USER
  }
}

export const addToCart = (product)=>{
  return {
    type:ADD_TO_CART,
    payload:product
  }
}

export const removeFromCart = (productId)=>{
  return{
    type:REMOVE_FROM_CART,
    payload:productId
  }
}

export const clearCartItem = () =>{
  return{
    type:CLEAR_CART_ITEM
  }
}

export const updateCartQuantity = (productId, quantity)=>{
  return{
    type:UPDATE_CART_QUANTITY,
    payload:{productId, quantity}
  }
}