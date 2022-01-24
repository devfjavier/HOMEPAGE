import styles from "../../styles/cards/last-project.module.scss"

const LastProject = () => {
  return (
    <a className={styles["proyecto-enlace"]} href="">
      <article className={styles.descripcion}>
        <h4 className={styles.titulo}>Proyecto</h4>
        <p className={styles.texto}>Lorem ipsum dolor sit amet.</p>
      </article>
      <div className={styles["contenedor-img"]}><img loading="lazy" src="https://images.unsplash.com/photo-1591696331096-c73fe847643d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/></div>
    </a>
  )
}

export default LastProject