var botaoAdicionar = document.querySelector("#botao-adicionar")
var form = document.querySelector("#info-form")
var todasApostas = []
var quantApostas

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault()

    var form = document.querySelector("#info-form")
    var dados = obtemDados(form)

    adicionaDados(dados)
    arrayDados(dados)

    form.reset()
})

function obtemDados(form) {
    var dados = {
        nome: form.nome.value,
        aposta: form.aposta.value
    }
    return dados
}

function montaTabela(dados) {
    var dadosTr = document.createElement("tr")
    var dadoNome = document.createElement("td")
    var dadoAposta = document.createElement("td")

    dadoNome.classList.add("info-nome")
    dadoAposta.classList.add("info-aposta")
    dadoNome.textContent = dados.nome
    dadoAposta.textContent = dados.aposta

    dadosTr.classList.add("info-dados");
    dadosTr.appendChild(dadoNome)
    dadosTr.appendChild(dadoAposta)

    return dadosTr
}

function adicionaDados(dados) {
    var dadosTR = montaTabela(dados)
    var tabela = document.querySelector("#tabela-apostas").querySelector("tbody")
    tabela.appendChild(dadosTR)

    if(dados.aposta == valor) {
    tabela = document.querySelector("#tabela-vencedores").querySelector("tbody")
    tabela.appendChild(dadosTR)
    }
}

function arrayDados(dados) {
    var numerosApostas = Number(dados.aposta)
    todasApostas.push(numerosApostas)
    quantApostas = todasApostas.length
}