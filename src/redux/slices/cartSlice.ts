import { createSlice } from "@reduxjs/toolkit"

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
const getJSONcartStorage: any = () => {
  const dataItem = localStorage.getItem('cart')
  const items = dataItem ? JSON.parse(dataItem) : []
  const count = items.length
  const sum = items.reduce((sum: any, acc: any) => sum + acc.price, 0)
  return {
      items,
      count,
      sum  
    }
}

const { items, count, sum } = getJSONcartStorage()

const initialState: InitialState = {
  items: items,
  count: count,
  sum: sum,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart(state, action) {
      state.items.push(action.payload)
      state.count += 1
      state.sum += action.payload.price
    },
    removeItemCart(state, action) {
      state.items = state.items.filter((key) => key.hash !== action.payload.hash)
      state.count -= 1
      state.sum -= action.payload.price
    },
    clearCart(state) {
      state.items = []
      state.count = 0
      state.sum = 0
    },
  },
})

export const { addItemCart, removeItemCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
