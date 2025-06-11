import { useState } from "react";
import styles from "./mensagem.module.css";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export function MenasgemPage(){

    const navigate = useNavigate();
    const[show, setShow] = useState(false);

    const messageOne = "Olá!";
    const messageTwo = "Bem-Vindo";

    let message;
    if(show){
        message = messageOne;
    } else{
        message = messageTwo;
    }

    let text;
    if(show){
        text = "Voltar";
    } else{
        text = "Entrar";
    }

    return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <p className={styles.text}>{message}</p>
        <div className={styles.buttonContainer}>
          <Button className={styles.botao}
            type="button"
            message={text}
            onClick={() => setShow(!show)}
          />

          <Button className={styles.botao}
            type="button"
            message="Back to home"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}