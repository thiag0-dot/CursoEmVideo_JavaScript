function Contar(){
    let res = document.querySelector('div#res')
    let inicio = document.querySelector('input#txtinicio')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpasso')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Erro] Faltam dados!')
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f){
            //Contagem Crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
    
    
}