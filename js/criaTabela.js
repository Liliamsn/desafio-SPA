export const handleTarefa = (evento)=> {

    evento.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem("linha")) || [];

    const corpo = document.querySelector("[data-corpo]");

    const inputNome = document.querySelector("[data-form-nome]");
    const nome = inputNome.value;
        
    const inputInicio = document.querySelector("[data-form-inicio]");
    const inicio = moment(inputInicio.value);
    const dataInicio = inicio.format("DD/MM/YYYY");
        
    const inputDuracao = document.querySelector("[data-form-duracao]");
    const duracao = inputDuracao.value; 

    const inputTermino = document.querySelector("[data-form-termino]");
    const termino = moment(inputTermino.value);
    const dataTermino = termino.format("DD/MM/YYYY");

    const msg = document.querySelector("[data-form-msg]");
    const mensagem = msg.value;

    const dados = {
        nome,
        duracao,
        dataInicio,
        dataTermino,
        mensagem
    }

    const tarefasAtualizadas = [...tarefas, dados];
        
    const criaTarefa = criaTabela(dados)

    corpo.appendChild(criaTarefa);


    localStorage.setItem("linha", JSON.stringify(tarefasAtualizadas));

    inputNome.value = " ";
    inputInicio.value = " ";
    inputDuracao.value = " ";
    inputTermino.value = " ";
    msg.value = " ";

}

export const criaTabela = ({nome, duracao, dataInicio, dataTermino})=> {

    const linha = document.createElement("tr");
   
    const conteudo = `<td class="tabela__corpo-conteudo">${nome}</td>
                    <td class="tabela__corpo-conteudo">${duracao} semanas</td>
                    <td class="tabela__corpo-conteudo">${dataInicio}</td> 
                    <td class="tabela__corpo-conteudo">${dataTermino}</td>`;

    linha.innerHTML = conteudo;

    return linha;
}