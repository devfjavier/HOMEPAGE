import { NavLink } from "react-router-dom"
import styles from "../../styles/fragments/menu-link.module.scss"

const MenuLink = ({ to, onClick, children }) => {
  return (
    <li>
      <NavLink onClick={onClick} className={styles.link} to={to}>
        { children }
      </NavLink>
    </li>
  )
}

export default MenuLink