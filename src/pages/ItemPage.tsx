import * as React from "react";
import { useParams } from "react-router-dom";
import SizeButton from "../components/SizeButton";
import { useAppDispatch, useAppSelector } from "../redux/redux";
import { fetchItemsById } from "../redux/slices/fetchSlice";
import Button from "../components/Button";

export interface Item {
  id: number;
  title: string;
  description: string | null;
  price: number;
  gender: string;
  category: string;
  mainPhoto: string;
  sidePhotos: string[];
  brand: string;
  sizes: string[];
  features?: string[] | null;
  colors?: string[] | null;
}

const ItemPage = () => {
  const itemData = useAppSelector((state) => state.fetchSlice.item);
  const { loading, error } = useAppSelector((state) => state.fetchSlice);
  const [chosedSize, setChoosedSize] = React.useState("");
  const [photos, setPhotos] = React.useState<Array<string>>([]);
  const [currentPhotoId, setCurrentPhotoId] = React.useState(0);
  const dispatch = useAppDispatch();
  const params = useParams();
  const fetchItem = async () => {
    dispatch(fetchItemsById(params.id));
  };
  React.useEffect(() => {},[chosedSize])
  React.useEffect(() => {
    fetchItem();
  }, []);
  React.useEffect(() => {
    if (itemData) {
      setPhotos([itemData.mainPhoto, ...itemData.sidePhotos]);
    }
  }, [params, itemData]);
  React.useEffect(() => {}, [currentPhotoId, photos, loading]);
  const onClickArrow = (direction: boolean) => {
    if (direction) {
      if (currentPhotoId !== photos.length - 1) {
        setCurrentPhotoId(currentPhotoId + 1);
      }
    } else {
      if (currentPhotoId !== 0) {
        setCurrentPhotoId(currentPhotoId - 1);
      }
    }
  };
  const onClickSize = (s: string) => {
    setChoosedSize(s)
  };
  const onClickButton = () => {};
  return (
    <div className="itemPage">
      <div className="main">
        {loading && <h1>Loading</h1>}
        {!loading && (
          <>
            {currentPhotoId !== photos.length - 1 && (
              <img
                onClick={() => onClickArrow(true)}
                className="arrowRight"
                src="/img/arrow.svg"
                alt="arrowRight"
              />
            )}
            {currentPhotoId !== 0 && (
              <img
                onClick={() => onClickArrow(false)}
                className="arrowLeft"
                src="/img/arrow.svg"
                alt="arrowLeft"
              />
            )}
            <img
              className="mainPhoto"
              src={photos[currentPhotoId]}
              alt="mainphoto"
            />
            {currentPhotoId !== photos.length - 1 && (
              <img
                className="secondPhoto"
                src={photos[currentPhotoId + 1]}
                alt="sidePhotos"
              />
            )}

            <div className="details">
              <div className="header">
                <div className="brand">{itemData?.brand}</div>
                <div className="price">€ {itemData?.price}</div>
              </div>
              <div className="description">{itemData?.description}</div>
              <ul className="features">
                {itemData?.features &&
                  itemData?.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="sizesContainer">
                {itemData?.sizes.map((size, i) => (
                  <SizeButton chosedSize={chosedSize} key={i} size={size} onClickSize={onClickSize} />
                ))}
              </div>
              <div className="buttonContainer">
                <Button
                  onClickButton={() => onClickButton()}
                  size="medium"
                  primary={true}
                >
                  add to cart
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemPage;
