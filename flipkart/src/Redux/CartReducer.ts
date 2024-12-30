import { ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_QUANTITY,CLEAR_CART_ITEM } from "./ActionType.ts";

const imgUrl = "./images/top-brands/kurta.webp"
const initialState = {
  items: [
    {
      product: {
        id: '1',
        name: 'Apple iPhone 14',
        price: 999.99,
        imageUrl: imgUrl,
      },
      quantity: 1,
      totalPrice: 999.99,
    },
    {
      product: {
        id: '2',
        name: 'Samsung Galaxy S23',
        price: 799.99,
        imageUrl: imgUrl,
      },
      quantity: 2,
      totalPrice: 1599.98,
    },
  ],
  total: 2599.97,
};

export const cartReducer = (state=initialState, action)=>{
   switch(action.type){
     case ADD_TO_CART:
      const availableProId = state.items.findIndex(item => item.product.id === action.payload.id);
      let updatedItem;
      
      if(availableProId !== -1){
        updatedItem = state.items.map((item, index) => {
          if(index == availableProId){
            return {
              ...state,
              quantity:item.quantity + 1,
              totalPrice: item.totalPrice + action.payload.price
            }
          }
          return item;
        });
      }else{
        updatedItem = [...state.items, {
          product:action.payload,
          quantity: 1,
          totalPrice: action.payload.price
        }]
      }
      const newTotal = updatedItem.reduce((sum, item)=>{
        sum = sum + item.totalPrice;
        return sum;
      },0)

      return {
        ...state,
        items: updatedItem,
        total:newTotal,
      };
      case REMOVE_FROM_CART:
        const filteredItems = state.items.filter(item => item.product.id !== action.payload);
        const newCartTotal = filteredItems.reduce((sum, item) => sum + item.totalPrice, 0);
        return {
          ...state,
          items: filteredItems,
          total: newCartTotal,
        };

      case UPDATE_CART_QUANTITY:
        console.log("start updation")
        const updatedCartItems = state.items.map((item)=>{
          if(item.product.id == action.payload.productId){
             return{
              ...item,
              quantity: action.payload.quantity,
              totalPrice: item.product.price * (action.payload.quantity)
             }
          }
          return item;
        });
        console.log("updated cart item",updatedCartItems)
        const updatedTotal = updatedCartItems.reduce((sum, item) => sum + item.totalPrice, 0);
        console.log(updatedTotal)
        console.log("missin completed",)
        return {
          ...state,
          items:updatedCartItems,
          total: updatedTotal,
        };

      case CLEAR_CART_ITEM:
        return {...state,items:[]}
        
  
      default:
        return state;
   }
}