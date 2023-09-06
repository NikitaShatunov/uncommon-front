import { Link } from "react-router-dom"
import * as React from "react"
import Cart from "./Cart"
import { useAppSelector } from "../redux/redux"

interface HeaderProps {
  size: "small" | "medium" | "large"
  backgroundColor?: string
  color?: string
  links: string[]
  location: string
}

const Header = ({
  size,
  backgroundColor,
  links,
  color,
  location,
}: HeaderProps) => {
  const [isCartShown, setIsCartShown] = React.useState(false)
  const items = useAppSelector(state => state.cartSlice.items)
  React.useEffect(() => {
   if(window.location.pathname !== '/bag') {
    if(!isCartShown && items.length) {
      setIsCartShown(true)
    }
   }
  }, [items])
  React.useEffect(() => {

  }, [isCartShown])
  const onClickModal = () => {
    setIsCartShown(false)
  }
  return (
    <>
      <ul
        style={{ backgroundColor, color }}
        className={`header__container header__container__${size}`}
      >
        {links &&
          links.map((link, id) => (
            <div key={id} style={{ display: "flex" }}>
              {link !== "cart" && (
                <Link
                  to={`${link === "home" ? "/" : link}`}
                  style={
                    location === "/" && link === "home"
                      ? { textTransform: "uppercase" }
                      : location.replace("/", "") === link
                      ? { textTransform: "uppercase" }
                      : {}
                  }
                >
                  {link}
                </Link>
              )}
              {link === "cart" && (
                <span
                  onClick={() => setIsCartShown(true)}
                  style={isCartShown ? { textTransform: "uppercase" } : {}}
                >
                  {link}
                </span>
              )}
              {id !== links.length - 1 && <li>|</li>}
            </div>
          ))}
      </ul>
      <Cart handler={() => onClickModal()} isCartShown={isCartShown} />
    </>
  )
}

export default Header
