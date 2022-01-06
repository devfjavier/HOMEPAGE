import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"

const Header = () => {
  const botonMenu = useRef()
  const menuPrincipal = useRef()
  
  const toggleMenu = () => {
    menuPrincipal.current.classList.toggle("esta-activo")
    botonMenu.current.classList.toggle("esta-activo")
  }

  useEffect(() => {
    const enlaces = document.querySelectorAll(".menu-principal .enlace")

    botonMenu.current.addEventListener("click", toggleMenu)

    for (const enlace of enlaces) {
      enlace.addEventListener("click", toggleMenu)
    }
  })

  return (
    <header className="cabecera-principal">
    <div className="contenedor">
      <a className="logo-enlace" href="index.html"><img src="https://image.flaticon.com/icons/png/512/2251/2251538.png" alt=""/></a>
      <button ref={botonMenu} className="boton-interruptor-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
          <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>
      </button>
      <nav ref={menuPrincipal} className="menu-principal">
        <ul>
          <li><NavLink className="enlace" to="/">Inicio</NavLink></li>
          <li><NavLink className="enlace" to="/about-us">¿Quienes somos?</NavLink></li>
          <li><NavLink className="enlace" to="/projects">Proyectos</NavLink></li>
          <li><NavLink className="enlace" to="/contact">Contacto</NavLink></li>
        </ul>
      </nav>
    </div>
    <script src="JS/scripts.js"></script>
  </header>  
  )
}

export default Header