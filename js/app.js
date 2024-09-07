function buscarFilme() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesq")
  let campoPesquisa = document.getElementById("campo-pesquisa").value
  // se o campoPesquisa for uma string vazia não faça nada
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi digitado</p>"
    return
  }
  campoPesquisa = campoPesquisa.toLowerCase()
  //console.log(campoPesquisa)
  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = ""
  let titulo = ""
  let genero = ""
  let tags = ""

  // Itera sobre cada item (filme ou série) no array filmesESeries
  for (let i of filmesESeries) {
    titulo = i.titulo.toLowerCase()
    genero = i.genero.toLowerCase()
    tags = i.tags.toLowerCase()
    // Constrói o HTML para cada resultado, formatando as informações do item
    if (titulo.includes(campoPesquisa) || genero.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
        <div id="resultado" class="item-resultado">
          <h2>
            <a href="#" target="_blank">${i.titulo}</a><br>
            <span>${i.genero}</span><br>
            <span>Ano ${i.ano}</span><br>
          </h2>
          <p class="descricao-meta">${i.sinopse}</p>
          <span>Ano ${i.elenco}</span><br>
        </div>
      `;
    } 
    if (!resultados) {
      resultados = "<p>Não foi encotrado na base de dados</p>"
    }
  }

  // Atribui o HTML construído à seção de resultados
  section.innerHTML = resultados;
}
//console.log(section)
//console.log(filmesESeries[1].titulo);
//console.log(filmesESeries[1].ano);
//console.log(filmesESeries[1].genero);