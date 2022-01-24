import Project from "../../cards/Project"

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
            projects.map(id => <Project key={id}/>)
          }
        </div>
      </section>
    </main>
  )
}

export default Projects