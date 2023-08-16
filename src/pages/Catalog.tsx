import * as React from "react";
import qs from "qs";
import ItemBlock from "../components/ItemBlock";
import SearchingPanel from "../components/SearchingPanel";
import SideBar from "../components/SideBar";
import { Item } from "./ItemPage";
import { useAppDispatch, useAppSelector } from "../redux/redux";
import { fetchItems } from "../redux/slices/fetchSlice";
import ItemSkeleton from "../components/ItemSkeleton";
import { useNavigate } from "react-router-dom";
import { setCategories, setGenders } from "../redux/slices/sortSlice";

const Catalog = () => {
 const {loading, error, data} = useAppSelector(state => state.fetchSlice)
 const genders = useAppSelector((state) => state.sortSlice.genders);
 const categories = useAppSelector((state) => state.sortSlice.categories);
 const dispatch = useAppDispatch()
 const navigate = useNavigate()
 const fetchData = async () => {
  dispatch(fetchItems())
}
 React.useEffect(() => {

  const params = qs.parse(window.location.search.substring(1));
  if (params.genders && Array.isArray(params.genders)) {
    params.genders.map(key => dispatch(setGenders(key)))
  }
  if (params.categories && Array.isArray(params.categories)) {
    params.categories.map(key => dispatch(setCategories(key)))
  }
  fetchData()
 }, [])
  React.useEffect(() => {
    if(data) {
      const queryString = qs.stringify({
        genders,
        categories
      })
      navigate(`?${queryString}`)
    }
  }, [data, genders, categories]);
  return (
    <div className="catalog__wrapper">
      <SearchingPanel />
        <div className="main">
            <SideBar />
          <div className="catalogCarts">
          {loading && new Array(6).fill(0).map((_, id) => <div key={id} style={{marginBottom: 80, marginLeft: 64}}><ItemSkeleton/></div>)}
                  {!loading &&
        data?.map((item: Item, i: number) => (
          <div className="itemContainer" key={i}>
            <ItemBlock
            id={item.id}
            mainPhoto={item.mainPhoto}
            brand={item.brand}
            category={item.category}
            price={item.price}
          />
          </div>
        ))}
          </div>
        </div>
    </div>
  );
};
export default Catalog;
