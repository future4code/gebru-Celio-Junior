const tarefas = []
const novaTarefa = process.argv[2]
const novaListaDeTarefas = [...tarefas, novaTarefa]

console.log('Tarefa adicionada com sucesso!')
console.log(`Tarefas: ${novaListaDeTarefas}`)