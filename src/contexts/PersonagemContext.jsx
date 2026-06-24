import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import {
    criar,
    listar,
    remover
} from "../services/personagemServices";

const PersonagemContext = createContext();

const estadoInicialPersonagem = {

    nome: "",
    idade: 0,
    classe: "",
    raca: "",
    level: 1,

    atributos: [
        { nome: "forca", valor: 10 },
        { nome: "destreza", valor: 12 },
        { nome: "constituicao", valor: 14 },
        { nome: "inteligencia", valor: 8 },
        { nome: "sabedoria", valor: 13 },
        { nome: "carisma", valor: 15 }
    ]

};

export function PersonagemProvider({ children }) {

    const [classes, setClasses] = useState([]);
    const [racas, setRacas] = useState([]);

    const [personagensSalvos, setPersonagensSalvos] = useState([]);

    const [personagem, setPersonagem] = useState(
        estadoInicialPersonagem
    );

    async function carregarPersonagensSalvos() {

        const dados = await listar();

        if (!dados.message) {

            setPersonagensSalvos(dados);

        }

    }

    async function enviarParaServidor() {

        const resultado = await criar(personagem);

        if (!resultado.message) {

            await carregarPersonagensSalvos();

            setPersonagem(estadoInicialPersonagem);

            alert("Personagem salvo!");

        }

    }

    async function excluirPersonagem(id) {

        await remover(id);

        carregarPersonagensSalvos();

    }

    function alterarAtributo(nome, valor) {

        setPersonagem(prev => ({
            ...prev,

            atributos: prev.atributos.map(atributo =>
                atributo.nome === nome
                    ? {
                        ...atributo,
                        valor: Number(valor)
                    }
                    : atributo
            )

        }));

    }

    useEffect(() => {

        async function carregarDados() {

            const respostaClasses =
                await fetch(
                    "https://www.dnd5eapi.co/api/classes"
                );

            const respostaRacas =
                await fetch(
                    "https://www.dnd5eapi.co/api/races"
                );

            const dadosClasses =
                await respostaClasses.json();

            const dadosRacas =
                await respostaRacas.json();

            setClasses(dadosClasses.results);

            setRacas(dadosRacas.results);

        }

        carregarDados();

        carregarPersonagensSalvos();

    }, []);

    return (

        <PersonagemContext.Provider
            value={{
                personagem,
                setPersonagem,

                classes,
                racas,

                personagensSalvos,

                alterarAtributo,

                enviarParaServidor,

                excluirPersonagem
            }}
        >

            {children}

        </PersonagemContext.Provider>

    );

}

export function usePersonagem() {

    return useContext(PersonagemContext);

}