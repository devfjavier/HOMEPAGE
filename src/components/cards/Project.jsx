import styles from "../../styles/cards/project.module.scss"

const Project = () => {
  return (
    <article className={styles.proyecto}>
      <div className={styles["contenedor-img"]}><img loading="lazy" src="https://raw.githubusercontent.com/devfjavier/Proyecto-de-EDsoft/master/src/images/proyecto.webp" alt=""/></div>
      <div className={styles.contenedor}>
        <h3 className={styles.titulo}>Proyecto</h3>
        <p className={styles.texto}>Lorem ipsum dolor sit amet.</p>
        <a className={styles.enlace} href="" target="_blank" rel="nofollow noreferrer noopener">Ver proyecto</a>
      </div>
    </article>
  )
}

export default Project