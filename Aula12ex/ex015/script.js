function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.lenght <= 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //var genero = fsex[0].checked && idade >= 0 && idade <= 10 ? 'Menino Criança' : 'Menina Criança'
        if (fsex[0].checked){
            var genero = 'Homem'
        } if (idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'FotoBebeMasc.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'FotoJovemMasc.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'FotoAdultoMasc.png')

        } else {
            //idoso
            img.setAttribute('src', 'FotoVelhoMasc.png')

        }

        if (fsex[1].checked){
            var genero = 'Mulher'
        } if (idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'FotoBebeFemi.png')

        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'FotoJovemFemi.png')

        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'FotoAdultoFemi.png')

        } else {
            //idoso
            img.setAttribute('src', 'FotoVelhoFemi.png')

        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}