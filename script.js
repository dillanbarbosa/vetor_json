function busca_alunos(){
    fetch('dados.jason')
    .then(response => response.json)
}