let contatos = [{
    nome: "Maxwell Wright",
    telefone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    nome: "Raja Villarreal",
    telefone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    nome: "Helen Richards",
    telefone: "0800 1111",
    email: "libero@convallis.edu"
}];

let executando = true;

while (executando) {
    // Solicita a ação do usuário com as opções em português
    let acao = prompt("O que você deseja fazer? (primeiro, ultimo, todos, novo, sair)");
    
    // Se o usuário clicar em cancelar no aviso, sai do loop
    if (acao === null) {
        break;
    }

    switch (acao.toLowerCase()) {
        case "primeiro":
            if (contatos.length > 0) {
                console.log(`Primeiro contato: ${contatos[0].nome} | ${contatos[0].telefone} | ${contatos[0].email}`);
            } else {
                console.log("A lista de contatos está vazia.");
            }
            break;
            
        case "ultimo":
            if (contatos.length > 0) {
                let ultimoContato = contatos[contatos.length - 1];
                console.log(`Último contato: ${ultimoContato.nome} | ${ultimoContato.telefone} | ${ultimoContato.email}`);
            } else {
                console.log("A lista de contatos está vazia.");
            }
            break;
            
        case "todos":
            console.log("--- Lista de Todos os Contatos ---");
            // Utilizando o loop for-of para iterar sobre todos os contatos
            for (let contato of contatos) {
                console.log(`Nome: ${contato.nome}`);
                console.log(`Telefone: ${contato.telefone}`);
                console.log(`Email: ${contato.email}`);
                console.log("----------------------------------");
            }
            break;
            
        case "novo":
            let novoNome = prompt("Digite o nome do novo contato:");
            let novoTelefone = prompt("Digite o telefone do novo contato:");
            let novoEmail = prompt("Digite o email do novo contato:");
            
            // Verifica se o usuário preencheu todos os campos
            if (novoNome && novoTelefone && novoEmail) {
                contatos.push({
                    nome: novoNome,
                    telefone: novoTelefone,
                    email: novoEmail
                });
                console.log("Novo contato adicionado com sucesso!");
            } else {
                console.log("Operação cancelada ou dados incompletos.");
            }
            break;
            
        case "sair":
            console.log("Encerrando o programa de contatos. Até logo!");
            executando = false; // Interrompe a execução do loop principal
            break;
            
        default:
            console.log("Comando inválido. Por favor, escolha: primeiro, ultimo, todos, novo ou sair.");
            break;
    }
}