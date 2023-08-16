import { Link } from "react-router-dom"

interface HeaderProps {
  size: "small" | "medium" | "large"
  backgroundColor?: string
  color?: string
  links: string[]
  location: string
}

const Header = ({ size, backgroundColor, links, color, location }: HeaderProps) => {
  return (
    <ul style={{backgroundColor, color}} className={`header__container header__container__${size}`}>
      {links &&
        links.map((link, id) => (
          <div key={id} style={{ display: "flex" }}>
            <Link to={`${link}`} style={location.replace('/', '') === link ? {textTransform: "uppercase"} : {}}>
              {link}
            </Link>
            {id !== links.length - 1 && <li>|</li>}
          </div>
        ))}
    </ul>
  );
};

export default Header;
