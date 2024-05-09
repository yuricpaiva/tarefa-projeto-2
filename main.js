const form = document.getElementById("form-agenda")
const contato = []
const numero = []
let linhas = ''


form.addEventListener('submit', function (e) {
    e.preventDefault()
    atualizaTabela()
    console.log(contato, numero)
})

function atualizaTabela() {
    const trTabela = document.querySelector('tbody')
    let inputNome = document.getElementById('nome-contato').value
    let inputNumero = document.getElementById('numero-contato').value

    contato.push(inputNome)
    numero.push(inputNumero)

    let linha = '<tr>'
    linha += `<td><img class="td-icon" src="./images/contato.png" alt="contato">${inputNome}</td>`
    linha += `<td><img class="td-icon" src="./images/telefone.png" alt="telefone">${inputNumero}</td>`
    linha += `</tr>`
    
    linhas += linha

    trTabela.innerHTML = linhas

    inputNome = ''
    inputNumero = ''
}


