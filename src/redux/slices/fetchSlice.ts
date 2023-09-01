import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'
import { Item } from '../../pages/ItemPage'



export const fetchItems: any = createAsyncThunk('data/fetchItems', async ({genders, categories, colors}: any) => {
  let queryString = `?`
  if(genders.length) {
    genders.forEach((element: string) => {
      queryString += `gender=${element}&`
    })
  }
  if(categories.length) {
    categories.forEach((element: string) => {
      queryString += `categories=${element}&`
    })
  }
  if(colors.length) {
    colors.forEach((element: string) => {
      queryString += `colors=${element}&`
    })
  }
  const { data } = await axios.get(`/items${queryString}`)
  return data
})
export const fetchItemsById: any = createAsyncThunk('data/fetchItemsById', async (id) => {
    const { data } = await axios.get(`/items/${id}`)
    return data
  })

  interface InitialState {
    data: [],
    item: Item,
    loading: boolean,
    error: boolean,
  }
  const initialState: InitialState = {
    data: [],
    item: {
        id: 0,
    title: '',
    description: '',
    price: 0,
    gender: '',
    category: '',
    mainPhoto: '',
    sidePhotos: [''],
    brand: '',
    sizes: [''],
    features: [''],
    colors: [''],
    },
    loading: false,
    error: false,
  }

const fetchSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setItems(state, action) {
      state.data = action.payload
  }
},
extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = false
    })
    builder.addCase(fetchItems.pending, (state) => {
        state.loading = true
    })
    builder.addCase(fetchItems.rejected, (state) => {
        state.loading = false
        state.error = true
    })

    builder.addCase(fetchItemsById.fulfilled, (state, action) => {
      state.item  = action.payload
      state.loading = false
    })
    builder.addCase(fetchItemsById.pending, (state) => {
        state.loading = true
    })
    builder.addCase(fetchItemsById.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  },
})

export const { setItems } = fetchSlice.actions
export default fetchSlice.reducer