import { useAppDispatch, useAppSelector } from "../redux/redux";
import * as React from "react";
import { clearSort, removeCategories, removeGenders, setCategories, setGenders } from "../redux/slices/sortSlice";

const SideBar = () => {
  const genders = useAppSelector((state) => state.sortSlice.genders);
  const categories = useAppSelector((state) => state.sortSlice.categories);
  const dispatch = useAppDispatch();

  type GendersType = "man" | "woman" | "unisex"
  const gendersArray: Array<GendersType> = [
    "man",
    "woman",
    "unisex",
  ];
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
  ];

  const onClickGender = (g: GendersType) => {
    if (genders.includes(g)) {
      dispatch(removeGenders(g));
    } else dispatch(setGenders(g));
  };
  const onClickCategories = (c: CatsType) => {
    if (categories.includes(c)) {
        dispatch(removeCategories(c));
      } else dispatch(setCategories(c));
  };
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
    </div>
  );
};

export default SideBar;
