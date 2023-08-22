import styles from  './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/54505179?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Bernardo</strong>
                        <span>Web Developer</span>
                    </div>

                    <time title='18 de Agosto às 18:14h' dateTime='2023-08-18'>
                        Publicado há 1h
                    </time>
                </div>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a> {' '}
                    <a href='#'>#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário' 
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}