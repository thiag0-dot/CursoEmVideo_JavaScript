let num = document.querySelector("input#txtnum")
let list = document.querySelector("select#lista")
let res = document.querySelector("div#res")
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function Adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert("Valor inválido ou já encontrado na lista")
    }
    txtnum.value = ""
    num.focus()
}

function Finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</br>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</br>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</br>`
        res.innerHTML += `<p> Somando todos os valores ${soma}</br>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}</br>`
    }
}