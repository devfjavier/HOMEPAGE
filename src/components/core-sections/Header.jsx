import { useRef } from "react";
import { Link, NavLink } from "react-router-dom"
import Icon from "../../svgs/Icon";

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
          <li><NavLink onClick={toggleMenu} className="enlace" to="/">Inicio</NavLink></li>
          <li><NavLink onClick={toggleMenu} className="enlace" to="/about-us">¿Quienes somos?</NavLink></li>
          <li><NavLink onClick={toggleMenu} className="enlace" to="/projects">Proyectos</NavLink></li>
          <li><NavLink onClick={toggleMenu} className="enlace" to="/contact">Contacto</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>  
  )
}

export default Header