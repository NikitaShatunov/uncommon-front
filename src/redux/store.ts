import { combineReducers, configureStore } from "@reduxjs/toolkit"
import sortSlice from "./slices/sortSlice"
import fetchSlice from "./slices/fetchSlice"
import cartSlice from "./slices/cartSlice"
import authSlice from "./slices/authSlice"
const rootReducer = combineReducers({
 sortSlice,
 fetchSlice,
 cartSlice,
 authSlice
})
export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch