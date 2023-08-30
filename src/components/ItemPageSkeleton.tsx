import ContentLoader from "react-content-loader"

const ItemPageSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={1583}
    height={748}
    viewBox="0 0 1583 748"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="134" y="1" rx="0" ry="0" width="450" height="600" /> 
    <rect x="636" y="1" rx="0" ry="0" width="354" height="480" />
    <rect x="636" y="510" rx="0" ry="0" width="354" height="100" />
    <rect x="1150" y="80" rx="0" ry="0" width="354" height="480" />
  </ContentLoader>
)

export default ItemPageSkeleton