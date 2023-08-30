import { useAppDispatch, useAppSelector } from "../redux/redux"
import { clearSort, removeCategories, removeColors, removeGenders, setCategories, setColors, setGenders } from "../redux/slices/sortSlice"

type GendersType = "man" | "woman" | "unisex"
  const gendersArray: Array<GendersType> = [
    "man",
    "woman",
    "unisex",
  ]
  type CatsType = "jackets"
  | "shoes"
  | "pants"
  | "shirts"
  | "skirts"
  | "dresses"
  | "bags"
  | "tops"
  const categoriesArray: Array<CatsType> = [
    "jackets",
    "shoes",
    "pants",
    "shirts",
    "skirts",
    "dresses",
    "bags",
    "tops",
  ]
  type ColorsType = 'brown' | 'black' | 'pink' | 'green' | 'yellow'
  const colorsArray: Array<ColorsType> = ['brown', 'black', 'pink', 'green', 'yellow']

const SideBar = () => {
  const {genders, categories, colors} =  useAppSelector((state) => state.sortSlice)
  const dispatch = useAppDispatch()
  const onClickGender = (g: GendersType) => {
    if (genders.includes(g)) {
      dispatch(removeGenders(g))
    } else dispatch(setGenders(g))
  }
  const onClickCategories = (c: CatsType) => {
    if (categories.includes(c)) {
        dispatch(removeCategories(c))
      } else dispatch(setCategories(c))
  }
  const onClickColors = (c: ColorsType) => {
    if (colors.includes(c)) {
      dispatch(removeColors(c))
    } else dispatch(setColors(c))
  } 
  return (
    <div className="sideBar">
      <div className="label">
        refine | <span onClick={() => dispatch(clearSort())}>clear all</span>
      </div>
      <ul>
        <span>Gender</span>
        {gendersArray.map((gender, id) => (
          <li
            onClick={() => onClickGender(gender)}
            key={id}
            className={`${genders.includes(gender) ? "active" : ""}`}
          >
            {gender}
          </li>
        ))}
      </ul>
      <ul>
        <span>Categories</span>
       {categoriesArray.map((categorie, i) => <li key={i} className={`${categories.includes(categorie) ? "active" : ""}`} onClick={() => onClickCategories(categorie)}>{categorie}</li>)}
      </ul>
      <ul>
        <span>Colors</span>
       {colorsArray.map((color, i) => <li key={i} className={`${colors.includes(color) ? "active" : ""}`} onClick={() => onClickColors(color)}>{color}</li>)}
      </ul>
    </div>
  )
}

export default SideBar
