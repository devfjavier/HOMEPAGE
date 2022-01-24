import LastProject from "../../cards/LastProject"

const LastProjects = () => {
  return (
    /* <!-- SECCION ULTIMOS PROYECTOS --> */
    <section className="ultimos-proyectos contenedor-seccion">
      <h2 className="titulo">Ultimos proyectos</h2>
      <div className="contenedor">
        <LastProject/>
        <LastProject/>
        <LastProject/>
        <LastProject/>
      </div>
    </section>
  )
}

export default LastProjects