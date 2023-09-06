import { createSlice } from '@reduxjs/toolkit'
import { ItemCart } from './cartSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'
type Address = {
    email: string
    firstName: string
    lastName: string
    street: string
    city: string
    country: string
    zip: string
    phone: string
}

interface InitialState {
    items: ItemCart[]
    sum: number
    address: Address
}

const initialState: InitialState = {
    items: [],
    sum: 0,
    address: {
        email: '',
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        country: '',
        zip: '',
        phone: '',
    },
}
export const fetchOrderPost: any = createAsyncThunk('data/fetchOrderPost', async (body) => {
    const { data } = await axios.post(`/order`, body)
    return data
  })

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItemsIntoOrder (state, action) {
            state.items = action.payload.items
            state.sum = action.payload.sum
        },
        saveAddressInormation (state, action) {
            state.address = action.payload
        },
        clearOrderSlice (state) {
            state.address =  {email: '',
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            country: '',
            zip: '',
            phone: '',}
            state.items = []
            state.sum = 0
        }
    },
})

export const {addItemsIntoOrder, saveAddressInormation, clearOrderSlice} = orderSlice.actions
export default orderSlice.reducer
