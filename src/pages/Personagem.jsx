import FormPersonagem from "../components/FormPersonagem";
import { usePersonagem } from "../contexts/PersonagemContext";

function Personagem() {

    const { personagem } = usePersonagem();

    return (
        <>
            <FormPersonagem />

            <section className="ficha">

                <h2>Ficha</h2>

                <p>Nome: {personagem.nome}</p>
                <p>Idade: {personagem.idade}</p>
                <p>Classe: {personagem.classe}</p>
                <p>Raça: {personagem.raca}</p>
                <p>Nível: {personagem.level}</p>

                <h3>Atributos</h3>

                {personagem.atributos.map((atributo) => (
                    <p key={atributo.nome}>
                        {atributo.nome}: {atributo.valor}
                    </p>
                ))}

            </section>
        </>
    );
}

export default Personagem;