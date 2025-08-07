function plano(click) {
    let voz = document.getElementById('voz')
    let bot = document.getElementById('bot')
    let bot2 = document.getElementById('bot2')
    let chamada = document.getElementById('chamada')
    let botoes = document.getElementById('botoes')
    if (click == 'a1') {
        voz.innerText = "Se você nunca treinou, o recomendado é fazer o plano mensal, para saber se você vai gostar da musculação ou das outras aulas coletivas!"
        bot.style.display = 'none'
        chamada.style.display = 'flex'
    }
    if (click == 'b1') {
        voz.innerText = 'Você se compremeteria com um plano anual?'
        bot.style.display = 'none'
        bot2.style.display = 'grid'
    }
    if (click == 'b2') {
        voz.innerText = 'Então o plano ideal para você é o Combo plus, não conten fidelidade e é renovado altomaticamente todo mês.'
        bot2.style.display = 'none'
        chamada.style.display = 'flex'
    }
    if (click == 'c1') {
        voz.innerText = 'Então o plano que mais se encaixa com você seria o Combo vip, além de você ganhar um brinde pode parcelar em até 12x sem juros!'
        bot2.style.display = 'none'
        chamada.style.display = 'flex'
    }

}





