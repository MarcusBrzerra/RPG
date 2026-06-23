import { useState } from "react";
import Layout from "../components/Layout";
import { usePersonagem } from "../contexts/PersonagemContext";

const Ficha = () => {
    const { personagem } = usePersonagem();
    return(
        <>
            <h1>Ficha</h1>

            <p>Nome: {personagem.nome}</p>
            <p>Nome: {personagem.idade}</p>
            <p>Classe: {personagem.classe}</p>
            <p>Raça: {personagem.raca}</p>
        </>
    );
}
export default Ficha;