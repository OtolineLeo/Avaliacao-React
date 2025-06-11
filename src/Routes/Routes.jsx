import { Route, Routes } from "react-router-dom";
import { TarefasPage } from "../pages/tarefas/tarefas";
import { HomePage } from "../pages/homepage/home";
import { MenasgemPage } from "../pages/mensagem/mensagem";
import { TemaPage } from "../pages/tema/tema";

export function Rota(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/mensagem" element={<MenasgemPage/>}/>
            <Route path="/tarefas" element={<TarefasPage/>}/>
            <Route path="/tema" element={<TemaPage/>}/>
        </Routes>
    )
};