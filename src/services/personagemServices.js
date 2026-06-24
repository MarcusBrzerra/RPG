const url = "http://localhost:3000/personagens";

// POST
async function criar(personagem) {
    try {

        const resposta = await fetch(url, {
            method: "POST",
            body: JSON.stringify(personagem),
            headers: {
                "Content-Type": "application/json"
            }
        });

        return await resposta.json();

    } catch (error) {

        return {
            message: `${error.message}`
        };

    }
}

// GET
async function listar() {

    try {

        const resposta = await fetch(url);

        return await resposta.json();

    } catch (error) {

        return {
            message: `${error.message}`
        };

    }

}

// DELETE
async function remover(id) {

    try {

        const resposta = await fetch(`${url}/${id}`, {
            method: "DELETE"
        });

        return await resposta.json();

    } catch (error) {

        return {
            message: `${error.message}`
        };

    }

}

export {
    criar,
    listar,
    remover
};