const Projects = () => {
  const projects = []
  for (let index = 0; index < 12; index++) {
    projects[index] = index + 1
  }

  return (
    <main>
      <section className="todos-los-proyectos contenedor-seccion">
        <h1 className="titulo">Proyectos</h1>
        <div className="contenedor">
          {
            projects.map(id => 
              <article key={id} className="proyecto">
                <div className="contenedor-img"><img loading="lazy" src="https://raw.githubusercontent.com/devfjavier/Proyecto-de-EDsoft/master/src/images/proyecto.webp" alt=""/></div>
                <div className="contenido">
                  <h3 className="titulo">Proyecto</h3>
                  <p className="texto">Lorem ipsum dolor sit amet.</p>
                  <a href="" target="_blank" rel="nofollow noreferrer noopener">Ver proyecto</a>
                </div>
              </article>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default Projects