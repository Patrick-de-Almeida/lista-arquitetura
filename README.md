# Sistema de Gerenciamento de Contatos

Este é um sistema simples de gerenciamento de contatos desenvolvido em JavaScript. Ele permite aos usuários adicionar, remover, listar e buscar contatos por nome ou email.

## Funcionalidades

- Adicionar contato: Permite adicionar um novo contato com nome, telefone e email.
- Remover contato: Permite remover um contato existente pelo nome.
- Listar contatos: Lista todos os contatos cadastrados no sistema.
- Buscar contatos por nome: Permite buscar contatos pelo nome.

## Padrões de Projeto Utilizados
### Padrão de Projeto Estrutural: Adapter
O padrão Adapter foi utilizado para a classe `GerenciadorContatos`. Este padrão foi escolhido pois permite adicionar e remover contatos de forma flexível, sem precisar modificar o código existente. Qualquer adaptação necessária para diferentes tipos de contatos pode ser feita através deste padrão, mantendo a coesão e a flexibilidade do sistema.

### Padrão de Projeto Comportamental: Strategy
O padrão Strategy foi empregado na classe `AlgoritmoBusca`, que é responsável pela busca de contatos. Este padrão foi escolhido pois permite variar os algoritmos de busca independentemente da classe que os utiliza. Com esse padrão, podemos facilmente trocar ou adicionar novos algoritmos de busca sem alterar o código existente, o que aumenta a manutenibilidade e a extensibilidade do sistema.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `Contato.js`: Define a classe Contato que representa um contato.
- `GerenciadorContatos.js`: Define a classe GerenciadorContatos responsável por adicionar, remover, listar e buscar contatos.
- `AlgoritmoBusca.js`: Define a classe abstrata AlgoritmoBusca que serve como interface para os algoritmos de busca específicos.
- `BuscaPorNome.js`: Define a classe BuscaPorNome que implementa a busca de contatos por nome.
- `CLI.js`: Implementa uma interface de linha de comando (CLI) para interagir com o sistema.
- `index.js`: Arquivo principal que inicia a CLI.

## Como Usar

Para usar o sistema, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em seu computador.
2. Baixe ou clone o repositório do projeto.
3. Abra um terminal ou prompt de comando e navegue até o diretório do projeto.
4. Execute o comando `node index.js` para iniciar a interface de linha de comando.
5. Siga as instruções exibidas na tela para interagir com o sistema e gerenciar seus contatos.

## Autor

Este projeto foi desenvolvido por [Patrick Quine](https://github.com/Patrick-de-Almeida).
