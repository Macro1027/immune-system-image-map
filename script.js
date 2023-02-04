const markers = document.querySelectorAll('.markers')
const markerCards = document.querySelectorAll('.marker__card')
const overlay = document.querySelector('.overlay')

const hideModal = function() {
    overlay.classList.add('hidden')
    for (const markerCard of markerCards) {
        if (!markerCard.classList.contains('hidden')) {
            markerCard.classList.add('hidden')
        }
    }
}
for (let i=0; i<markers.length; i++) {
    markers[i].addEventListener('click', function() {
        markerCards[i].classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

for (const markerCard of markerCards) {
    markerCard.addEventListener('click', function() {
        markerCard.classList.add('hidden')
        overlay.classList.add('hidden')
    })
}

overlay.addEventListener('click', hideModal)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideModal()
    }
})