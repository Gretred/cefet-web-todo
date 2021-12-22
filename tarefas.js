class Tarefas {
    constructor(nome, categoria, realizada){
        this.nome = nome;
        this.categoria = categoria;
        this.realizada = realizada;
    }
    adicionaNaPagina(containerEl){
        let tarefaEl = document.createElement('li');
        tarefaEl.classList.add('item-tarefa');
        tarefaEl.classList.add(this.categoria);       
        tarefaEl.innerHTML = this.nome;
        if(this.realizada === true){
            tarefaEl.classList.add('marcado');
        }
        containerEl.appendChild(tarefaEl);             
    }
}


const tarefa = [
     new Tarefas('Exercicio Prog Web', 'Estudos',true),
     new Tarefas('Estudar otimização', 'Estudos')]
let listaEl = document.querySelector('#lista-tarefas');
for(let i=0; i<tarefa.length;i++ ){
    tarefa[i].adicionaNaPagina(listaEl);
}

//Exercicio 2

let botaoEl = document.querySelector('#incluir-nova-tarefa');
botaoEl.addEventListener('click', function add(){
    let nomeTarefaEl = document.querySelector('#nova-tarefa-nome');
    let nometarefa = nomeTarefaEl.value;
    let categoriaEl = document.querySelector('#nova-tarefa-categoria');
    let categoria = categoriaEl.value;
    const novaTarefa = new Tarefas( nometarefa, categoria);
    listaEl.innerHTML='';
    tarefa.push(novaTarefa);
    for(let i=0; i<tarefa.length;i++ ){
        tarefa[i].adicionaNaPagina(listaEl);
    }
    nomeTarefaEl.value= '';
    nomeTarefaEl.focus();
});


