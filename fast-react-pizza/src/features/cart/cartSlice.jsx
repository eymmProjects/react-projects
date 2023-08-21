import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzaId: 12,
  name: 'Mediterranean',
  quantity: 2,
  unitPrice: 16,
  totalPrice: 32,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseItemQuality(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.pizzaId);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuality(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice;
