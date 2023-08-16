import React from "react"
import ContentLoader from "react-content-loader"

const ItemSkeleton = (props: any) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={500}
    viewBox="0 0 300 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="1" rx="0" ry="0" width="300" height="400" /> 
    <rect x="3" y="416" rx="0" ry="0" width="120" height="65" />
  </ContentLoader>
)

export default ItemSkeleton