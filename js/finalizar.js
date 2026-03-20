var botãoFinalizar = document.querySelector("#botao-finalizar")

botãoFinalizar.addEventListener("click", function(event) {
    event.preventDefault()

    var valorMedia = media()
    var valorMediana = mediana()
    var valorModa = moda()

    var dadosF = dadosFinais(valorMedia, valorMediana, valorModa)
    adicionaDadosFinais(dadosF)
})

function media() {
    var somaApostas = todasApostas.reduce((acc, numero) => acc + numero)
    var mediaValor = somaApostas / quantApostas
    return mediaValor
}

function mediana() {
    var rolApostas = todasApostas.sort((a,b) => {return a-b})
    var posição = quantApostas / 2
    var valorMediana

    if(quantApostas % 2 === 0) {
        var valor1 = rolApostas[posição]
        posição --
        var valor2 = rolApostas[posição]
        valorMediana = (valor1 + valor2) / 2
    } else {
        var posiçãoImpar = Number.parseInt(posição)
        valorMediana = rolApostas[posiçãoImpar]
    }
    return valorMediana
}

function moda() {
    var vetores = {}

    todasApostas.forEach((vetor) => {
        vetores[vetor] = (vetores[vetor] || 0) + 1
    });

    var valorMax = Math.max(...Object.values(vetores))
    var modaValor = Object.keys(vetores).find((key) => vetores[key] === valorMax)
    return modaValor;
}

function dadosFinais(valorMedia, valorMediana, valorModa) {
    var dadosF = {
        quantidade: quantApostas,
        media: valorMedia,
        mediana: valorMediana,
        moda: valorModa
    }
    return dadosF
}

function montaTabelaDados(dadosF) {
    var dadosTr = document.createElement("tr")
    var dadoQuantidade = document.createElement("td")
    var dadoMedia = document.createElement("td")
    var dadoModa = document.createElement("td")
    var dadoMediana = document.createElement("td")

    dadoQuantidade.classList.add("quantidade")
    dadoMedia.classList.add("media")
    dadoMediana.classList.add("mediana")
    dadoModa.classList.add("moda")

    dadoQuantidade.textContent = dadosF.quantidade
    dadoMedia.textContent = dadosF.media
    dadoMediana.textContent = dadosF.mediana
    dadoModa.textContent = dadosF.moda

    dadosTr.classList.add("info-dados");
    dadosTr.appendChild(dadoQuantidade)
    dadosTr.appendChild(dadoMedia)
    dadosTr.appendChild(dadoMediana)
    dadosTr.appendChild(dadoModa)

    return dadosTr
}

function adicionaDadosFinais(dadosF) {
    var dadosTR = montaTabelaDados(dadosF)
    var tabela = document.querySelector("#tabela-dados").querySelector("tbody")
    tabela.appendChild(dadosTR)
}