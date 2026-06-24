import { usePersonagem } from "../contexts/PersonagemContext";
import "../components/FormPersonagem.css"

function FormPersonagem() {

    const {
    personagem,
    setPersonagem,
    classes,
    racas,
    alterarAtributo,
    enviarParaServidor
    } = usePersonagem();

    const handleChange = (e) => {
        setPersonagem({
            ...personagem,
            [e.target.name]: e.target.value
        });
    }
    const validarFormulario = () => {

        if (personagem.nome.trim() === "") {
            alert("Informe o nome do personagem.");
            return false;
        }

        if (personagem.idade <= 0) {
            alert("A idade deve ser maior que zero.");
            return false;
        }

        if (personagem.classe === "") {
            alert("Escolha uma classe.");
            return false;
        }

        if (personagem.raca === "") {
            alert("Escolha uma raça.");
            return false;
        }

        for (const atributo of personagem.atributos) {

            if (atributo.valor < 1 || atributo.valor > 20) {

                alert(
                    `${atributo.nome} deve estar entre 1 e 20`
                );

                return false;
            }

        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        enviarParaServidor(); // Dispara o envio via Axios
    };

    const handleSalvar = () => {

        if (validarFormulario()) {
            enviarParaServidor();
        }

    }
    

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="formulario-personagem">
                <legend className="titulo-form">Criar Personagem</legend>

                <label className="campo-formulario">
                    <span className="texto-label">Nome:</span>
                    <input 
                        type="text" 
                        name="nome" 
                        value={personagem.nome} 
                        onChange={handleChange}
                        placeholder="Nome do herói"
                    />
                </label>
            
                <label className="campo-formulario">
                    <span className="texto-label">Idade:</span>
                    <input 
                        type="number" 
                        name="idade" 
                        value={personagem.idade} 
                        onChange={handleChange}
                        placeholder="Ex: 25"
                    />
                </label>
                
                <label className="campo-formulario">
                    <span className="texto-label">Classe:</span>
                    <select name="classe" value={personagem.classe} onChange={handleChange}>
                        <option value="">Escolha uma classe</option>
                        {classes.map(classe => (
                            <option key={classe.index} value={classe.name}>
                                {classe.name}
                            </option>
                        ))}
                    </select>
                </label>
                
                <label className="campo-formulario">
                    <span className="texto-label">Raça:</span>
                    <select name="raca" value={personagem.raca} onChange={handleChange}>
                        <option value="">Escolha uma raça</option>
                        {racas.map(raca => (
                            <option key={raca.index} value={raca.name}>
                                {raca.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="campo-formulario">
                    <span className="texto-label">nivel:</span>
                    <input 
                        type="number" 
                        name="level" 
                        value={personagem.level} 
                        onChange={handleChange}
                    />
                </label>
                <fieldset className="campo-atributos">

                    <legend>Atributos</legend>

                    {
                        personagem.atributos.map((atributo) => (

                            <label
                                className="campo-formulario"
                                key={atributo.nome}
                            >

                                <span className="texto-label">
                                    {atributo.nome}
                                </span>

                                <input
                                    type="number"
                                    value={atributo.valor}
                                    onChange={(e) =>
                                        alterarAtributo(
                                            atributo.nome,
                                            e.target.value
                                        )
                                    }
                                />

                            </label>

                        ))
                    }

                </fieldset>
            </fieldset>
            <button type="button" onClick={handleSalvar} className="salvarPersonagem">
                Salvar Personagem
            </button>
        </form>
    );
}

export default FormPersonagem;