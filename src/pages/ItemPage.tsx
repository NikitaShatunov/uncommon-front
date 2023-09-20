import * as React from "react"
import { useNavigate, useParams } from "react-router-dom"
import SizeButton from "../components/SizeButton"
import { useAppDispatch, useAppSelector } from "../redux/redux"
import { fetchItemsById } from "../redux/slices/fetchSlice"
import Button from "../components/Button"
import { addItemCart } from "../redux/slices/cartSlice"
import { v4 as uuidv4 } from 'uuid'
import ItemPageSkeleton from "../components/ItemPageSkeleton"
import AlbomDeskTop from "../components/ItemPageComponents/AlbomDeskTop"

export interface Item {
  id: number
  title: string
  description: string | null
  price: number
  gender: string
  category: string
  mainPhoto: string
  sidePhotos: string[]
  brand: string
  sizes: string[]
  features?: string[] | null
  colors?: string[] | null
}

const ItemPage = () => {
  const itemData = useAppSelector((state) => state.fetchSlice.item)
  const { loading, error } = useAppSelector((state) => state.fetchSlice)
  const [chosedSize, setChoosedSize] = React.useState("")
  const [photos, setPhotos] = React.useState<Array<string>>([])
  const [currentPhotoId, setCurrentPhotoId] = React.useState(0)
  const [isPopUpShown, setIsPopUpShown] = React.useState(false)
  const [isButtonAvailable, setIsButtonAvailable] = React.useState(false)
  const [isDescriptionShown, setIsDescriptionShown] = React.useState(false)
  const albomPhotoRef = React.useRef<HTMLImageElement>(null)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const fetchItem = async () => {
    dispatch(fetchItemsById(params.id))
  }
  React.useEffect(() => {
    if (!chosedSize.length) {
      setIsButtonAvailable(false)
    } else {
      setIsButtonAvailable(true)
    }
  }, [chosedSize])
  React.useEffect(() => {
    fetchItem()
  }, [])
  React.useEffect(() => {
    if (itemData) {
      setPhotos([itemData.mainPhoto, ...itemData.sidePhotos])
    }
  }, [params, itemData, error])
  React.useEffect(() => {}, [currentPhotoId, photos, loading])
  
  const onClickArrow = (direction: boolean) => {
    if (direction) {
      if (currentPhotoId !== photos.length - 1) {
        setCurrentPhotoId(currentPhotoId + 1)
      }
    } else {
      if (currentPhotoId !== 0) {
        setCurrentPhotoId(currentPhotoId - 1)
      }
    }
  }
  const onClickSize = (s: string) => {
    setChoosedSize(s)
  }
  const onClickButton = () => {
    const item = {
      hash: uuidv4(),
      id: itemData.id,
      size: chosedSize,
      price: itemData.price,
      photo: itemData.mainPhoto,
      brand: itemData.brand,
      category: itemData.category
    }
    if (chosedSize.length) {
      dispatch(addItemCart(item))
    }
  }
  const onClickPopUpPhoto = () => {
    setIsPopUpShown(false)
  }
  return (
    <div className="itemPage">
      <div className="main">
      <img onClick={() => navigate('/catalog')} className="arrowBack" src="/img/arrowBack.svg" alt="arrowBack" />
        {loading && <ItemPageSkeleton />}
        {error ? <div style={{width: '100%', height: "100%", display: 'flex', justifyContent: 'center'}}><img style={{marginTop: '100px'}} src="/img/error.svg" alt="error"/></div> : <>{!loading && (
          <>
          {isPopUpShown && <div ref={albomPhotoRef} className="popUpAlbom">{photos.map((url,id) => <img onClick={() => setCurrentPhotoId(id)} className={id === currentPhotoId ? "active" : ''} key={id} src={url} alt={"albomPhoto" + id}/>)}</div>}
          <div onClick={() => onClickPopUpPhoto()} style={isPopUpShown ? {display: "flex"} : {display: 'none'}} className="popUpImg">
            <img className="maiPhoto" style={{ marginTop: '40px'}} src={photos[currentPhotoId]} alt="mainItem" />
          </div>
          <AlbomDeskTop setIsPopUpShown={setIsPopUpShown} photos={photos} currentPhotoId={currentPhotoId} onClickArrow={onClickArrow}/>
              <div className="albomMobile">
                {photos.map((link, i) => <img src={link} alt={i + 'photo'} key={i}/>)}
              </div>
            <div className="details">
              <div className="header">
                <div className="brand">{itemData?.brand}</div>
                <div className="price">€ {itemData?.price}</div>
                <div className="title">{itemData?.title}</div>
              </div>
              {!isDescriptionShown ? <div onClick={() => setIsDescriptionShown(true)} style={{cursor: 'pointer'}} className="description">{itemData?.description?.slice(0, 40)}... +</div> : <div className="description">{itemData?.description}</div>}
              
              <ul className="features">
                {itemData?.features &&
                  itemData?.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="sizesContainer">
                {itemData?.sizes.map((size, i) => (
                  <SizeButton
                    chosedSize={chosedSize}
                    key={i}
                    size={size}
                    onClickSize={onClickSize}
                  />
                ))}
              </div>
              <div className="buttonContainer">
                <Button
                  available={isButtonAvailable}
                  onClickButton={() => onClickButton()}
                  size="medium"
                  primary={true}
                >
                  add to cart
                </Button>
              </div>
            </div>
          </>
        )}</>}
      </div>
    </div>
  )
}

export default ItemPage
