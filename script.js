function carregar () {

var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('id#imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

if (minuto < 10) {
    minuto = '0' + minuto;
}

if (hora < 10) {
    hora = '0' + hora;
}


msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
if (hora >= 0 && hora < 12) {
    // BOM DIA
    imagem.src = 'manha.png'
    document.body.style.background = '#fadfc4'

} else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    imagem.src = 'tarde.png'
    document.body.style.background = '#aa411a'
} else {
    // BOA NOITE
    imagem.src = 'noite.png'
    document.body.style.background = '#0c1e2a'
}
}
