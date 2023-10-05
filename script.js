const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')


let minhaListaDeItens = []


function adicionarNovaTarefa(){
   minhaListaDeItens.push({
    tarefa:input.value,
    concluida:false
   })

   input.value = ''


  mostrarTarefas()
}

function mostrarTarefas(){

let novaLi = ''

minhaListaDeItens.forEach((item, posicao) => {

    novaLi =  novaLi + `


    <li class="task ${item.concluida && "done"}">
    <img src="checked.png" alt="checar tarefa"  onclick="concluirTarefas(${posicao})">
    <p>${item.tarefa}</p>
    <img src="trash.png" alt="tarefa para o lixo" onclick="deletarItem(${posicao})">
    </li>
    `
})

listaCompleta.innerHTML = novaLi


localStorage.setItem('lista',JSON.stringify(minhaListaDeItens))
 
}

function concluirTarefas(posicao){
  minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

  mostrarTarefas()
}

function recarregarTarefas(){

    const tarefasDolocalStorage = localStorage.getItem('lista')
   
    if(tarefasDolocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDolocalStorage);
    }
    mostrarTarefas();
   }
   

function  deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    
    mostrarTarefas()
}


recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)