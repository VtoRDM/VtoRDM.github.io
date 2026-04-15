// 1. Array de objetos atualizado com os novos projetos
const meusProjetos = [
    {
        titulo: "Portfólio Pessoal",
        descricao: "A primeira versão do meu portfólio acadêmico, estruturado com HTML5, CSS3 (Grid e Flexbox) e JavaScript puro.",
        link: "https://github.com/vitor-meliagro/portfolio-pessoal"
    },
    {
        titulo: "Portfólio React",
        descricao: "Uma versão aprimorada e componentizada do meu portfólio, desenvolvida utilizando a biblioteca React.",
        link: "https://github.com/vitor-meliagro/portfolio-react"
    }
];

// 2. Selecionar o elemento HTML onde os projetos serão inseridos
const containerProjetos = document.getElementById("container-projetos");

// 3. Função para renderizar os cards dinamicamente
function renderizarProjetos() {
    // Garante que o container esteja limpo antes de adicionar o conteúdo
    containerProjetos.innerHTML = "";

    // Percorre cada projeto do array
    meusProjetos.forEach(projeto => {
        // Cria a estrutura HTML em texto para o projeto atual
        const cardHTML = `
            <div class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank">Acessar Repositório</a>
            </div>
        `;
        
        // Injeta o HTML criado dentro do container na página
        containerProjetos.innerHTML += cardHTML;
    });
}

// 4. Executa a função assim que o script é carregado
renderizarProjetos();