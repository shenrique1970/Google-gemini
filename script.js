/*async function buscarFilmeeSerie(titulo) {
    const resposta = await fetch(`http://www.omdbapi.com/?apikey=SEU_API_KEY&t=${titulo}`);
    const dados = await resposta.json();
    return dados;
}


buscarFilme('The Shawshank Redemption')
    .then(filme => {
        console.log(filme);
        // Adicione o filme à sua base de conhecimento
        filmesESeries.push(filme);
    })
    .catch(error => {
        console.error('Erro ao buscar o filme:', error);
    });
*/