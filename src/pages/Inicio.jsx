import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Layout from "../components/Layout";
import { usePersonagem } from "../contexts/PersonagemContext";
import { Link } from "react-router";
import "./Inicio.css";

const Inicio = () => {

    const { personagensSalvos } = usePersonagem();

    return (
        <>
            <h1 className="titulo-home">
                Bem-vindo ao RPG
            </h1>

            <section className="painel-home">

                <article className="card-home">

                    <h2>Personagens Criados</h2>

                    <p>
                        Você possui {personagensSalvos.length} personagem(ns).
                    </p>

                </article>

                <article className="card-home">

                    <h2>Criar Personagem</h2>

                    <p>
                        Crie novos aventureiros para sua campanha.
                    </p>

                    <Link
                        className="botao-home"
                        to="/personagem"
                    >
                        Criar
                    </Link>

                </article>

                <article className="card-home">

                    <h2>Fichas</h2>

                    <p>
                        Veja todas as fichas salvas.
                    </p>

                    <Link
                        className="botao-home"
                        to="/ficha"
                    >
                        Visualizar
                    </Link>

                </article>

            </section>

            <section className="sobre-rpg">

                <h2>Sobre</h2>

                <p>
                    Sistema desenvolvido em React utilizando Context API
                    e a API pública do D&D 5e para criação de personagens.
                </p>

            </section>

        </>
    );
}

export default Inicio;