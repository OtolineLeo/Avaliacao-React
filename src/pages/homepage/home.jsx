import { useNavigate } from "react-router-dom"
import styles from './home.module.css';

export function HomePage(){
    const navigate = useNavigate();

    return(
        
        <div className={styles.container}>
            <ul>
                <h2 className={styles.titulo}>Trabalho do Leo</h2>
                <li onClick={()=> navigate("/tema")}>Tema</li>
                <li onClick={()=> navigate("/tarefas")}>Tarefas</li>
                <li onClick={()=> navigate("/mensagem")}>Mensagem</li>
            </ul>
        </div>
        
    )
}