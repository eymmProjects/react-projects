// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './features/user/useSlice';

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/useSlice';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
