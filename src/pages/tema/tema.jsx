import { useState } from 'react';
import styles from './tema.module.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

export function TemaPage(){

    const [escuro, setEscuro]=useState(false);
    const navigate = useNavigate();

    let tema;
    if(escuro){
        tema = styles.escuro;
    } else{
        tema = styles.claro;
    }

    let textButton;
    if(escuro){
        textButton = "Tema Claro";
    } else{
        textButton = "Tema Escuro";
    }
    return(
        <div className={`${styles.container} ${tema}`}>
            <div className={styles.buttonContainer}>
                <Button
                    type="button"
                    message={textButton}
                    onClick={()=> setEscuro(!escuro)}
                    className={styles.button}
                />

                <Button
                    type="button"
                    message="Voltar para Home"
                    onClick={() => navigate("/")}
                    className={styles.button}
                />
            </div>
        </div>
    );
}