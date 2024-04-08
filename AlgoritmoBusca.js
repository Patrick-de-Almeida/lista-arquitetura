class AlgoritmoBusca {
    buscar(contatos, termo) {
        return contatos.filter((contato) => contato.nome.includes(termo));
    }
}

export default AlgoritmoBusca;
