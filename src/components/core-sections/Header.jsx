import { useRef } from "react";
import { Link } from "react-router-dom"
import Icon from "../../svgs/Icon";
import MenuLink from "../fragments/MenuLink";

const Header = () => {
  const botonMenu = useRef()
  const menuPrincipal = useRef()
  
  const toggleMenu = () => {
    menuPrincipal.current.classList.toggle("esta-activo")
    botonMenu.current.classList.toggle("esta-activo")
  }

  return (
    <header className="cabecera-principal">
      <div className="contenedor">
        <Link to="/" className="logo-enlace">
          <img src="https://image.flaticon.com/icons/png/512/2251/2251538.png" alt=""/>
        </Link>
        <button ref={botonMenu} onClick={toggleMenu} className="boton-interruptor-menu">
          <Icon name="list"/>
          <Icon name="xLg"/>
        </button>
        <nav ref={menuPrincipal} className="menu-principal">
          <ul>
            <MenuLink onClick={toggleMenu} to="/">Inicio</MenuLink>
            <MenuLink onClick={toggleMenu} to="/about-us">¿Quienes somos?</MenuLink>
            <MenuLink onClick={toggleMenu} to="/projects">Proyectos</MenuLink>
            <MenuLink onClick={toggleMenu} to="/contact">Contacto</MenuLink>
          </ul>
        </nav>
      </div>
    </header>  
  )
}

export default Header