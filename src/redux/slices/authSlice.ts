import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchLogin: any = createAsyncThunk(
  "auth/fetchLogin",
  async (body) => {
    const { data } = await axios.post("/auth/login", body)
    return data
  }
)
export const fetchAuthMe: any = createAsyncThunk(
  "auth/fetchAuthMe",
  async () => {
    const { data } = await axios.get("/auth/me")
    return data
  }
)
export const fetchRegistration: any = createAsyncThunk(
  "auth/fetchRegistration",
  async (body) => {
    const { data } = await axios.post("/auth/registration", body)
    return data
  }
)
const initialState: { data: any; loading: Boolean; error: Boolean } = {
  data: [],
  loading: false,
  error: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = false
    })
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchLogin.rejected, (state) => {
      state.loading = false
      state.error = true
    })
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = false
    })
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.loading = false
      state.error = true
    })
    builder.addCase(fetchRegistration.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = false
    })
    builder.addCase(fetchRegistration.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchRegistration.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  },
})

export const {logout} = authSlice.actions
export default authSlice.reducer
