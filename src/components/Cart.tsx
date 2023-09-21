import { useAppSelector } from "../redux/redux"
import * as React from "react"
import Button from "./UI/Button"
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom"

interface CartProps {
  isCartShown: boolean
  handler: () => void
}

const Cart = ({ isCartShown, handler }: CartProps) => {
  const { items, sum, count } = useAppSelector((state) => state.cartSlice)
  const refCart = React.useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  React.useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      let path = event.composedPath().includes(refCart.current as Node)
      if (path) {
        handler()
      }
    }
    document.addEventListener("click", clickOutside)
    return () => {
      document.removeEventListener("click", clickOutside)
    }
  }, [isCartShown, handler])
  React.useEffect(() => {
    const cartJSON = JSON.stringify(items)
    window.localStorage.setItem('cart', cartJSON)
  }, [items])
  const onClickBuyNow = () => {
    navigate('/bag')
    handler()
  }
  return (
    <>
      <div className={`cart ${isCartShown ? "cart__shown" : ""}`}>
        <h1>CART</h1>
        {!items.length && (
          <div className="cartempty">
            <div className="cartempty__caption">
              YOUR CART IS CURRENTLY EMPTY.
            </div>
            <div className="cartempty__button">
              {" "}
              <Button
                available={true}
                size="medium"
                primary={true}
                onClickButton={() => handler()}
              >
                CONTINUE SHOPPING
              </Button>
            </div>
          </div>
        )}
        {Boolean(items.length) && (
          <div>
            <div className="cartList">
              {" "}
              {items.map((item, id) => (
                <CartItem key={id} {...item} />
              ))}
            </div>
            <div className="cartList__button">
              <div>
                <div className="totatlSum">subtotal: € {sum}</div>
                <Button
                  size="medium"
                  primary={true}
                  onClickButton={() => onClickBuyNow()}
                  available={true}
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        ref={refCart}
        className={`cart__wrapper ${isCartShown ? "cart__wrapper__shown" : ""}`}
      ></div>
    </>
  )
}

export default Cart
