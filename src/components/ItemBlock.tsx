import { Link } from "react-router-dom";
interface Item {
  id: number;
  mainPhoto: string;
  brand: string;
  category: string;
  price: number;
}
const ItemBlock = ({ id, mainPhoto, brand, category, price }: Item) => {
  return (
    <Link to={`/catalog/${id}`}>
      <div className="itemBlock">
        <img src={mainPhoto} alt="" />
        <div className="legend">
          <div>{brand}</div>
          <div>{category}</div>
          <div>€ {price}</div>
        </div>
      </div>
    </Link>
  );
};

export default ItemBlock;
