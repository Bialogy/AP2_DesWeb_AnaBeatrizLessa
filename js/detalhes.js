window.onload = () => {
    informacoes()
}

let divDetalhes = document.getElementById('detalhes')
let voltar = document.getElementById('voltar')

voltar.addEventListener('click', () => {
    window.location.href = '../'
}
)

function informacoes () {

    divDetalhes.innerHTML = `

        <img src = "${localStorage.getItem('@Imagem')}
        <h1> ${localStorage.getItem('@Nome')} </h1>
        <h1> ${localStorage.getItem('@Posicao')} </h1> 

        <p> ${localStorage.getItem('@Descricao')} </p>

        <strong> Nome Completo: </strong> <span> ${localStorage.getItem('@NomeCompleto')} </span>
        <strong> Data de Nascimento: </strong> <span> ${localStorage.getItem('@Nascimento')} </span>
        <strong> Altura: </strong> <span> ${localStorage.getItem('@Altura')} </span>

    `;

}