import { useAppDispatch } from "../redux/redux";
import { ItemCart, removeItemCart } from "../redux/slices/cartSlice";

const CartItem = (item: ItemCart) => {
  const dispatch = useAppDispatch();
  return (
    <div className="cartItemContainer">
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
      <img className="photo" src={item.photo} alt={item.id + " photo"} />
        <div className="inform">
          <div>{item.brand}</div>
          <div>{item.category}</div>
          <div>size: {item.size}</div>
          <div>€ {item.price}</div>
      </div>
      <img
      className="cross"
        onClick={() => dispatch(removeItemCart(item))}
        src="/img/cross.svg"
        alt="cross"
      />
      </div>
    </div>
  );
};

export default CartItem;
