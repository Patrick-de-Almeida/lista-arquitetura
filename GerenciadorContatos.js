class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    removerContatoPorNome(nome) {
        const indiceContato = this.contatos.findIndex((contato) => contato.nome === nome);
        if (indiceContato !== -1) {
            this.contatos.splice(indiceContato, 1);
            console.log(`Contato '${nome}' removido com sucesso.`);
        } else {
            console.log(`Contato '${nome}' não encontrado.`);
        }
    }

    listarContatos() {
        return this.contatos;
    }

    buscarContato(algoritmoBusca, termo) {
        return algoritmoBusca.buscar(this.contatos, termo);
    }
}

export default GerenciadorContatos;
