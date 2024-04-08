import readline from "readline";
import Contato from "./Contato.js";
import GerenciadorContatos from "./GerenciadorContatos.js";
import BuscaPorNome from "./BuscaPorNome.js";

const gerenciador = new GerenciadorContatos();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function exibirMenu() {
    console.log("Bem-vindo ao Sistema de Gerenciamento de Contatos");
    console.log("Selecione uma opção:");
    console.log("1. Adicionar Contato");
    console.log("2. Remover Contato");
    console.log("3. Listar Contatos");
    console.log("4. Buscar Contato por Nome");
    console.log("5. Sair");
}

function adicionarContato() {
    rl.question("Nome: ", (nome) => {
        rl.question("Telefone: ", (telefone) => {
            rl.question("Email: ", (email) => {
                const contato = new Contato(nome, telefone, email);
                gerenciador.adicionarContato(contato);
                console.log("Contato adicionado com sucesso!");
                exibirMenu();
                selecionarOpcao();
            });
        });
    });
}

function removerContato() {
    rl.question("Nome do contato a ser removido: ", (nome) => {
        gerenciador.removerContatoPorNome(nome);
        exibirMenu();
        selecionarOpcao();
    });
}

function listarContatos() {
    const contatos = gerenciador.listarContatos();
    console.log("Lista de Contatos:");
    contatos.forEach((contato) => {
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
    exibirMenu();
    selecionarOpcao();
}

function buscarContatosPorNome() {
    rl.question("Nome do contato a ser buscado: ", (nome) => {
        const algoritmoBusca = new BuscaPorNome();
        const contatosEncontrados = gerenciador.buscarContato(algoritmoBusca, nome);
        console.log(`Resultado da busca por '${nome}':`);
        contatosEncontrados.forEach((contato) => {
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
        });
        exibirMenu();
        selecionarOpcao();
    });
}

function selecionarOpcao() {
    rl.question("Opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                adicionarContato();
                break;
            case "2":
                removerContato();
                break;
            case "3":
                listarContatos();
                break;
            case "4":
                buscarContatosPorNome();
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Opção inválida. Por favor, selecione uma opção existente.");
                exibirMenu();
                selecionarOpcao();
        }
    });
}

exibirMenu();
selecionarOpcao();

export { selecionarOpcao };
