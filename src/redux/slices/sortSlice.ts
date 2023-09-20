import { createSlice } from "@reduxjs/toolkit"

type Genders = Array<"man" | "woman" | "unisex" >;
type  Colors = Array<'brown' | 'black' | 'pink' | 'green' | 'yellow'>
type Categories = Array<
  | "jackets"
  | "shoes"
  | "pants"
  | "shirts"
  | "skirts"
  | "dresses"
  | "bags"
  | "tops"
>;
interface Sort {
  genders: Genders
  categories: Categories
  colors: Colors
}

const initialState: Sort = {
  genders: [],
  categories: [],
  colors: []
}

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setGenders(state, action) {
      if(!state.genders.includes(action.payload)) {
        state.genders.push(action.payload)
      }
    },
    setCategories(state, action) {
      if(!state.categories.includes(action.payload)) {
        state.categories.push(action.payload)
      }
    },
    setColors(state, action) {
      if(!state.colors.includes(action.payload)) {
        state.colors.push(action.payload)
      }
    },
    removeGenders(state, action) {
      state.genders = state.genders.filter(g => g!== action.payload)
    },
    removeCategories(state, action) {
      state.categories = state.categories.filter(c => c!== action.payload)
    },
    removeColors(state, action) {
      state.colors = state.colors.filter(color => color !== action.payload)
    },
    clearSort(state) {
      state.categories = []
      state.genders = []
      state.colors = []
    }
  },
})
export const {setCategories, setGenders, removeCategories, removeGenders, clearSort, setColors, removeColors} = sortSlice.actions

export default sortSlice.reducer
