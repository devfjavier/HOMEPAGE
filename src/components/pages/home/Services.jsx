import Icon from "../../../svgs/Icon"

const Services = () => {
  return (
    /* <!-- SECCION NUESTROS SERVICIOS --> */
    <section className="nuestros-servicios contenedor-seccion">
      <h2 className="titulo">Nuestros servicios</h2>
      <div className="contenedor">
        <article className="servicio">
          <span className="icono"><Icon name="cleanCode"/></span>
          <h3 className="titulo">Servicio</h3>
          <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, dolorem?</p>
        </article>
        <article className="servicio">
          <span className="icono"><Icon name="fastDelivery"/></span>
          <h3 className="titulo">Servicio</h3>
          <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, dolorem?</p>
        </article>
        <article className="servicio">
          <span className="icono"><Icon name="communication"/></span>
          <h3 className="titulo">Servicio</h3>
          <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, dolorem?</p>
        </article>
      </div>
    </section>
  )
}

export default Services