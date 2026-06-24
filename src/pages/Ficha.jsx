import { useState } from "react";
import Layout from "../components/Layout";
import { usePersonagem } from "../contexts/PersonagemContext";

const Ficha = () => {

    const {
        personagensSalvos,
        excluirPersonagem
    } = usePersonagem();

    return (
        <>

            <h1>Fichas Salvas</h1>

            {
                personagensSalvos.map(personagem => (

                    <section key={personagem.id}>

                        <h2>
                            {personagem.nome}
                        </h2>

                        <p>
                            Idade:
                            {" "}
                            {personagem.idade}
                        </p>

                        <p>
                            Classe:
                            {" "}
                            {personagem.classe}
                        </p>

                        <p>
                            Raça:
                            {" "}
                            {personagem.raca}
                        </p>

                        <p>
                            Nível:
                            {" "}
                            {personagem.level}
                        </p>

                        <h3>
                            Atributos
                        </h3>

                        <ul>

                            {
                                personagem.atributos.map(
                                    atributo => (

                                        <li
                                            key={atributo.nome}
                                        >

                                            {atributo.nome}
                                            :
                                            {" "}
                                            {atributo.valor}

                                        </li>

                                    )
                                )
                            }

                        </ul>

                        <button
                            onClick={() =>
                                excluirPersonagem(
                                    personagem.id
                                )
                            }
                        >
                            Excluir
                        </button>

                    </section>

                ))
            }

        </>
    );

}

export default Ficha;