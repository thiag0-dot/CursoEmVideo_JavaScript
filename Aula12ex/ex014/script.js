function Carregar(){
    var img = document.querySelector("img#imagem")
    var msg = document.querySelector("div#msg")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12)
    {
        img.src = "FotoMorning.png"
        document.body.style.background = '#bf9f88'
    } else if (hora >= 12 && hora <= 18){
        img.src = "FotoAfternoon.png"
        document.body.style.background = '#f6a68d'
    } else{
        img.src = "FotoNight.png"
    }
}
