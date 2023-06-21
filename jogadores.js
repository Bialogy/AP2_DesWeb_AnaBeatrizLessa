window.onload = () => {
    abrirJogador()
}

let feminino = document.getElementById('feminino')
let masculino = document.getElementById('masculino')

const abrirJogador = () => {
    jogadores.forEach((jogador, i) => {
        if(jogador ["elenco"] == "feminino") {
            feminino.innerHTML += `
            
            <div id = "jogador${i}" onclick = "infoJogador(${i})">
                <h1> ${jogador ["nome"] } </h1>
                <img src = "${jogador ["imagem"]}">
            </div>

            `;   
        }

        else {
            masculino.innerHTML += `
            
            <div id = "jogador${i}" onclick = "infoJogador(${i})">
                <h1> ${jogador ["nome"] } </h1>
                <img src = "${jogador ["imagem"]}">
            </div>
            
            `;
        }
    })
}

function infoJogador(iJogador) {

    const jogador = jogadores[iJogador];
    console.log('falhou')

    localStorage('@Nome', jogador.nome)
    localStorage('@Imagem', jogador.imagem)
    localStorage('@Posicao', jogador.posicao)
    localStorage('@Descricao', jogador.descricao)
    localStorage('@NomeCompleto', jogador.nome_completo)
    localStorage('@Nascimento', jogador.nascimento)
    localStorage('@Altura', jogador.altura)

    window.location.href = './detalhes.html'

}