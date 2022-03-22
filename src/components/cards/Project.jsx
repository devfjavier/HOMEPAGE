import styles from "../../styles/cards/project.module.scss"
import IMG_PATH from "../../images/project.webp"

const Project = () => {
  return (
    <article className={styles.proyecto}>
      <div className={styles["contenedor-img"]}><img loading="lazy" src={IMG_PATH} alt=""/></div>
      <div className={styles.contenedor}>
        <h3 className={styles.titulo}>Proyecto</h3>
        <p className={styles.texto}>Lorem ipsum dolor sit amet.</p>
        <a className={styles.enlace} href="" target="_blank" rel="nofollow noreferrer noopener">Ver proyecto</a>
      </div>
    </article>
  )
}

export default Project