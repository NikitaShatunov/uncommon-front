import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { api } from "./fetchData"
import sortSlice from "./slices/sortSlice"
import fetchSlice from "./slices/fetchSlice"
import cartSlice from "./slices/cartSlice"
import authSlice from "./slices/authSlice"
import orderSlice from "./slices/orderSlice"
const rootReducer = combineReducers({
 sortSlice,
 fetchSlice,
 cartSlice,
 authSlice,
 orderSlice,
 [api.reducerPath]: api.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch