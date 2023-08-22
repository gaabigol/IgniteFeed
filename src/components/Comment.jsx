import { ThumbsUp, Trash } from 'phosphor-react';
import  { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar  hasBorder= {false} src={"https://avatars.githubusercontent.com/u/54505179?v=4"}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Bernardo</strong>
                            <time title='18 de Agosto às 18:14h' dateTime='2023-08-18'>Cerda de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                        
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}