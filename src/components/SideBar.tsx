import { useAppDispatch, useAppSelector } from "../redux/redux"
import { setCurrentPage } from "../redux/slices/fetchSlice"
import {
  clearSort,
  removeCategories,
  removeColors,
  removeGenders,
  setCategories,
  setColors,
  setGenders,
} from "../redux/slices/sortSlice"
import * as React from "react"
type GendersType = "man" | "woman" | "unisex"
const gendersArray: Array<GendersType> = ["man", "woman", "unisex"]
type CatsType =
  | "jackets"
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
type ColorsType = "brown" | "black" | "pink" | "green" | "yellow";
const colorsArray: Array<ColorsType> = [
  "brown",
  "black",
  "pink",
  "green",
  "yellow",
]

const SideBar = () => {
  const { genders, categories, colors } = useAppSelector(
    (state) => state.sortSlice
  )
  const [isPopUpShown, setIsPopUpShown] = React.useState(false)
  const dispatch = useAppDispatch()
  const onClickGender = (g: GendersType) => {
    dispatch(setCurrentPage(1))
    if (genders.includes(g)) {
      dispatch(removeGenders(g))
    } else dispatch(setGenders(g))
  }
  const onClickCategories = (c: CatsType) => {
    dispatch(setCurrentPage(1))
    if (categories.includes(c)) {
      dispatch(removeCategories(c))
    } else dispatch(setCategories(c))
  }
  const onClickColors = (c: ColorsType) => {
    dispatch(setCurrentPage(1))
    if (colors.includes(c)) {
      dispatch(removeColors(c))
    } else dispatch(setColors(c))
  }
  React.useEffect(() => {
    const x = window.matchMedia("(max-width: 900px)")
    setIsPopUpShown(!x.matches)
  }, [])
  return (
    <div className="sideBar">
      <div className="label">
        <span>refine</span>
        <span> | </span>
        <span className="clearAllBtn" onClick={() => {
          dispatch(clearSort())
          dispatch(setCurrentPage(1))}
          }>
          clear all
        </span>
      </div>
      <div className="labelMobile">
        <span onClick={() => setIsPopUpShown(!isPopUpShown)}>
          <span>refine</span>
         {isPopUpShown ? <span className="plusBtn"> - </span> :  <span className="plusBtn"> + </span> }
        </span>
        
       {isPopUpShown && <><span> | </span> <span className="clearAllBtn" onClick={() => {
        dispatch(clearSort())
        dispatch(setCurrentPage(1))}}>
          clear all
        </span></>}
      </div>
     {isPopUpShown && <div>
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
        {categoriesArray.map((categorie, i) => (
          <li
            key={i}
            className={`${categories.includes(categorie) ? "active" : ""}`}
            onClick={() => onClickCategories(categorie)}
          >
            {categorie}
          </li>
        ))}
      </ul>
      <ul>
        <span>Colors</span>
        {colorsArray.map((color, i) => (
          <li
            key={i}
            className={`${colors.includes(color) ? "active" : ""}`}
            onClick={() => onClickColors(color)}
          >
            {color}
          </li>
        ))}
      </ul></div>}
    </div>
  )
}

export default SideBar
