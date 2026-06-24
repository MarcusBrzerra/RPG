import { useState } from "react";
import Layout from "../components/Layout";
import { usePersonagem } from "../contexts/PersonagemContext";
import "./Ficha.css"

const Ficha = () => {

    const {
        personagensSalvos,
        excluirPersonagem
    } = usePersonagem();

    return (
        <>
            <h1 className="titulo-fichas">
                Fichas Salvas
            </h1>
            
            <section className="lista-fichas">

                {
                    personagensSalvos.map(personagem => (

                        <article
                            className="card-ficha"
                            key={personagem.id}
                        >

                            <h2 className="nome-personagem">
                                {personagem.nome}
                            </h2>

                            <p>Idade: {personagem.idade}</p>

                            <p>Classe: {personagem.classe}</p>

                            <p>Raça: {personagem.raca}</p>

                            <p>Nível: {personagem.level}</p>

                            <h3>
                                Atributos
                            </h3>

                            <ul className="lista-atributos">

                                {
                                    personagem.atributos.map(
                                        atributo => (

                                            <li
                                                key={atributo.nome}
                                            >
                                                {atributo.nome}: {atributo.valor}
                                            </li>

                                        )
                                    )
                                }

                            </ul>

                            <button
                                className="btn-excluir"
                                onClick={() =>
                                    excluirPersonagem(personagem.id)
                                }
                            >
                                Excluir
                            </button>

                        </article>

                    ))
                }

            </section>
        </>
    );

}

export default Ficha;