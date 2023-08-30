import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchLogin: any = createAsyncThunk('auth/fetchLogin', async (body) => {
   const {data} = await axios.post('http://localhost:4000/auth/login', body)
   return data
}) 

const initialState: {data: any, loading: Boolean, error: Boolean} = {
    data: [],
    loading: false,
    error: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false
    });
    builder.addCase(fetchLogin.pending, (state) => {
        state.loading = true;
      });
    builder.addCase(fetchLogin.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

export default authSlice.reducer;