import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sortSlice from "./slices/sortSlice";
import fetchSlice from "./slices/fetchSlice";
const rootReducer = combineReducers({
 sortSlice,
 fetchSlice
});
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;