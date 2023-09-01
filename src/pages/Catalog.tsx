import * as React from "react"
import qs from "qs"
import ItemBlock from "../components/ItemBlock"
import SearchingPanel from "../components/SearchingPanel"
import SideBar from "../components/SideBar"
import { Item } from "./ItemPage"
import { useAppDispatch, useAppSelector } from "../redux/redux"
import { fetchItems } from "../redux/slices/fetchSlice"
import ItemSkeleton from "../components/ItemSkeleton"
import { useNavigate } from "react-router-dom"
import { setCategories, setColors, setGenders } from "../redux/slices/sortSlice"

const Catalog = () => {
 const {loading, error, data} = useAppSelector(state => state.fetchSlice)
 const {genders, categories, colors} =  useAppSelector((state) => state.sortSlice)

 const dispatch = useAppDispatch()
 const navigate = useNavigate()
 const fetchData = async () => {
  const props = {
    genders,
    categories,
    colors
  }
  dispatch(fetchItems(props))
}
 React.useEffect(() => {
  const params = qs.parse(window.location.search.substring(1))
  if (params.genders && Array.isArray(params.genders)) {
    params.genders.map(key => dispatch(setGenders(key)))
  }
  if (params.categories && Array.isArray(params.categories)) {
    params.categories.map(key => dispatch(setCategories(key)))
  }
  if (params.colors && Array.isArray(params.colors)) {
    params.colors.map(key => dispatch(setColors(key)))
  }
  
 }, [])
 React.useEffect(() => {
  fetchData()
 }, [genders, categories, colors])
  React.useEffect(() => {    
    if(data.length) {
      const queryString = qs.stringify({
        genders,
        categories,
        colors
      })
      navigate(`?${queryString}`)
    }
  }, [data, genders, categories, colors, error])
  return (
    <div className="catalog__wrapper">
      <SearchingPanel />
        <div className="main">
            <SideBar />
          <div className="catalogCarts">
            {error ? <img style={{position: "absolute", top: "320px"}} src="/img/error.svg" alt="error"/> : <>
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
            </>}
          
          </div>
        </div>
    </div>
  )
}
export default Catalog
