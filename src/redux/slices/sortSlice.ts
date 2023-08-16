import { createSlice } from "@reduxjs/toolkit";

type Genders = Array<"man" | "woman" | "unisex" >;
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
  genders: Genders;
  categories: Categories;
}

const initialState: Sort = {
  genders: [],
  categories: [],
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setGenders(state, action) {
      state.genders.push(action.payload);
    },
    setCategories(state, action) {
      state.categories.push(action.payload);
    },
    removeGenders(state, action) {
      state.genders = state.genders.filter(g => g!== action.payload)
    },
    removeCategories(state, action) {
      state.categories = state.categories.filter(c => c!== action.payload)
    },
    clearSort(state) {
      state.categories = []
      state.genders = []
    }
  },
});
export const {setCategories, setGenders, removeCategories, removeGenders, clearSort} = sortSlice.actions

export default sortSlice.reducer
