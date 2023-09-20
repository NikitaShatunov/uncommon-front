interface Props {
    photos: string[]
    currentPhotoId: number
    onClickArrow : (value: boolean) => void
    setIsPopUpShown: (value: boolean) => void
}
const AlbomDeskTop = ({photos, currentPhotoId, onClickArrow, setIsPopUpShown}: Props) => {
    return ( <><div className="albomDeskTop">
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
      style={{cursor: "zoom-in"}}
        onClick={() => setIsPopUpShown(true)}
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
    </div></> )
}
 
export default AlbomDeskTop