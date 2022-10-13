document.addEventListener('click', function(e) {
    const isFlip = e.target.matches('[data-flip]')
    let isClose = e.target.matches('[data-close]')

    if(!isFlip && e.target.closest('[data-card]') != null) return

    let currentCard
    if(isFlip) {
        currentCard = e.target.parentElement.parentElement.parentElement.parentElement
        currentCard.classList.add('flip-active')
    }

    document.querySelectorAll('[data-card].flip-active').forEach(card => {
        if(card === currentCard) return
        return card.classList.remove('flip-active')
    })
})

const closeBtns = document.querySelectorAll('[data-close]')

closeBtns.forEach(close => {
    close.addEventListener('click', function(e) {
        let isTarget = this

        let currentCard
        let front
        if(isTarget) {
            currentCard = isTarget.parentElement.parentElement.parentElement
            // console.log(currentCard)
            return currentCard.classList.remove('flip-active')
        }
    })
})