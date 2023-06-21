window.onload = () => {
    informacoes()
}

let divDetalhes = document.getElementById('detalhes')
let voltar = document.getElementById('voltar')

voltar.addEventListener('click', () => {
    window.location.href = './index.html'
}
)

function informacoes () {

    divDetalhes.innerHTML = `

        <img src = "${localStorage.getItem('@Imagem')}">
        <h1> ${localStorage.getItem('@Nome')} </h1>
        <h1> ${localStorage.getItem('@Posicao')} </h1> 

        <strong> Nome Completo: </strong> <p> ${localStorage.getItem('@NomeCompleto')} </p>
        <strong> Data de Nascimento: </strong> <p> ${localStorage.getItem('@Nascimento')} </p>
        <strong> Altura: </strong> <p> ${localStorage.getItem('@Altura')} </p>

        <p> ${localStorage.getItem('@Descricao')} </p>

        `;
}