export const initialState = {
  basket: [],
  user: [],
  token: null,
  isLoggedIn: false,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        user: [
          // ...action.user,
          action.user.firstName,
          action.user.lastName,
          action.user.role,
        ],
        token: action.token,
        isLoggedIn: action.isLoggedIn,
      };
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
