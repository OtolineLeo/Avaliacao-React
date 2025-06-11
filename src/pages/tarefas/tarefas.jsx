import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./tarefas.module.css";
import { Input } from "../../components/Input/input"

export function TarefasPage() {
  const [texto, setTexto] = useState('');
    const [itens, setItens] = useState([]);

    const adicionarTexto = () => {
        if (texto.trim() !== '') {
        setItens([...itens, texto]);
        setTexto('');
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        adicionarTexto();
        }
    };

    const handleLimpar = () => {
        setItens([])
        setTexto('')
    };

    const navigate = useNavigate(); 

  return(
      <>        
        <div className={styles.tarefasEdit}>
          <h1>Tarefas</h1>

         <div className={styles.caixaComScroll}>
            {itens.map((item, index) => (

                <p className={styles.caixa} key={index}>
                  {item}
                  </p>

            ))}
          </div>

            <Input 
                type="text"
                placeholder="Digite sua tarefa..."
                onChange={(e) => setTexto(e.target.value)}
                value={texto}
                onKeyPress={handleKeyPress}
            />

            <div className={styles.buttonEditavel}>
            <Button
                type="submit"
                onClick={adicionarTexto}
                message={'Adicionar'}
                
            />
            <Button
                type="submit"
                onClick={handleLimpar}
                message={'Limpar  tudo'}
            />
            <Button
                type="button"
                message="Voltar para Home"
                onClick={() => navigate("/")}
                
            />
           </div>
        </div>
        </>
    )
} 
