interface FooterProps {
    size: "small" | "medium" | "large"
    backgroundColor?: string
    color?: string
    links: string[]
  }

  const hashLink: any = {
    "instagram" : "",
    "terms of use" : "",
    "privacy & policy" : "",
    "about us" : "/about",
    "shipping" : "/shipping"
  }

const Footer = ({size, backgroundColor, color, links}: FooterProps) => {
    return ( <ul style={{backgroundColor, color}} className={`footer__container footer__container__${size}`}>
{links &&
        links.map((link, id) => (
          <div key={id} style={{ display: "flex" }}>
            <a href={`${hashLink[link]}`}>
              {link}
            </a>
            {id !== links.length - 1 && <li>|</li>}
          </div>
        ))}
    </ul> )
}
 
export default Footer