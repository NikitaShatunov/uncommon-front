import { createSlice } from "@reduxjs/toolkit";

export interface ItemCart {
  hash: string;
  id: number;
  size: string;
  price: number;
  photo: string;
  brand: string;
  category: string;
}

interface InitialState {
  items: ItemCart[];
  count: number;
  sum: number;
}

const initialState: InitialState = {
  items: [],
  count: 0,
  sum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart(state, action) {
      state.items.push(action.payload);
      state.count += 1;
      state.sum += action.payload.price;
    },
    removeItemCart(state, action) {
      state.items = state.items.filter((key) => key.hash !== action.payload.hash);
      state.count -= 1;
      state.sum -= action.payload.price;
    },
    clearCart(state) {
      state.items = [];
      state.count = 0;
      state.sum = 0;
    },
  },
});

export const { addItemCart, removeItemCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
