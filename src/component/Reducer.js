export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //clone the basket
      let newBasket = [...state.basket];
      //
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //item exist remove it
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product id:${action.id}`);
      }
      //update the basket
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;
