window.onload = () => {
    abrirJogador()
}

let efeminino = document.getElementById('efeminino')
let emasculino = document.getElementById('emasculino')

const abrirJogador = () => {
    jogadores.forEach((jogador, indice) => {
        if(jogador ["elenco"] == "feminino") {
            efeminino.innerHTML += `
            
            <div id = "jogador${indice}" onclick = "infoJogador(${indice})">
                <h2> ${jogador ["nome"] } </h2>
                <img src = "${jogador ["imagem"]}">
            </div>

            `;   
        }

        else {
            emasculino.innerHTML += `
            
            <div id = "jogador${indice}" onclick = "infoJogador(${indice})">
                <h2> ${jogador ["nome"] } </h2>
                <img src = "${jogador ["imagem"]}">
            </div>
            
            `;
        }
    })
}

function infoJogador(indiceJogador) {

    const jogador = jogadores[indiceJogador];
    console.log('falhou')

    localStorage.setItem('@Nome', jogador.nome)
    localStorage.setItem('@Imagem', jogador.imagem)
    localStorage.setItem('@Posicao', jogador.posicao)
    localStorage.setItem('@Descricao', jogador.descricao)
    localStorage.setItem('@NomeCompleto', jogador.nome_completo)
    localStorage.setItem('@Nascimento', jogador.nascimento)
    localStorage.setItem('@Altura', jogador.altura)

    window.location.href = './detalhes.html'

}