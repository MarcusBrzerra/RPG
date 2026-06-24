import FormPersonagem from "../components/FormPersonagem";
import { usePersonagem } from "../contexts/PersonagemContext";

function Personagem() {

    const { personagem } = usePersonagem();

    return (
        <>
            <FormPersonagem />
        </>
    );
}

export default Personagem;