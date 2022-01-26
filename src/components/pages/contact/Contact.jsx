import Icon from "../../../svgs/Icon"

const Contact = () => {
  return (
    <main>
      <section className="contacto contenedor-seccion">
        <h1 className="titulo">Contacto</h1>
        <div className="contenedor">
          <div className="formulario">
            <h3 className="titulo">¿Tienes algo que decir?</h3>
          </div>
          <address>
            <div>
              <h4 className="titulo">Telefono</h4>
              <p className="texto">
                <span className="icono"><Icon name="whatsapp" fill="var(--title-color)"/></span>
                <a className="enlace" href="tel:1234567890">(123) 456 - 789 - 0</a>
              </p>
            </div>
            <div>
              <h4 className="titulo">Correo electronico</h4>
              <p className="texto">
                <span className="icono"><Icon name="email" fill="var(--title-color)"/></span>
                <a className="enlace" href="mailto:contacto@loremipsun.com">contacto@loremipsun.com</a>
              </p>
            </div>
            <div>
              <h4 className="titulo">Redes sociales</h4>
              <div>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
              </div>
            </div>
            <div>
              <h4 className="titulo">Direccion</h4>
              <p className="texto">
                <span className="icono"><Icon name="address" fill="var(--title-color)"/></span>
                <a className="enlace" href="https://www.google.com/maps/place/Groenlandia/@67.8825871,-73.8807304,3z/data=!3m1!4b1!4m5!3m4!1s0x4ea20dbbe3c07715:0x34cf9d830114e218!8m2!3d65.8747247!4d-46.1425781">Calle Falsa #123, Springfield, Óregon, Estados Unidos</a>
              </p>
            </div>
            <iframe className="map-ubcation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24611878.567421794!2d-73.88073035826869!3d67.88258712523397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ea20dbbe3c07715%3A0x34cf9d830114e218!2sGroenlandia!5e0!3m2!1ses!2smx!4v1589145084108!5m2!1ses!2smx" frameBorder="0" allowFullScreen="" style={{"border": 0}} aria-hidden="false" tabIndex="0"></iframe>
          </address>
        </div>
      </section>
    </main>
  )
}

export default Contact