
function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    //se o campoPesquisa não estiver string

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
        return 
    }
    
    //deixa todas as letras da barra de pesquisa em minusculo quando for pesquisar
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {

        //deixa todas as letras em minusculo 

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        // o include vai fazer uma comparação, se oq escrevermos no campoPesquisa tem  no dado.titulo ou no dado.descricao

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            // Cria o HTML para um item de resultado
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
    `;
    }
}

//! sinal de não - se não tiver resultados
if(!resultados){
    resultados = "<p>Nada foi encontrado</p>"
}
// Atualiza o conteúdo da seção com os resultados
section.innerHTML = resultados;
        
        
}