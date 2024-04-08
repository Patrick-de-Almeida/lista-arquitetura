import AlgoritmoBusca from "./AlgoritmoBusca.js";

class BuscaPorNome extends AlgoritmoBusca {
    buscar(contatos, termo) {
        return contatos.filter((contato) => contato.nome.toLowerCase().includes(termo.toLowerCase()));
    }
}

export default BuscaPorNome;
