const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
/*
para usar a função click em todos os cards
*/
for(let card of cards) {
    card.addEventListener("click", function() {
        const postId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`
    })
}

let modal = document.querySelector('.modal')
document.querySelector(".maximize-modal").addEventListener("click", function(){
    if(!modal.classList.contains('maximize')) {
        modal.classList.add('maximize')
    } /* else {
        modal.classList.remove('maximize')
    } */
})
document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
    modal.classList.remove('maximize')
})

document.querySelector(".minimize-modal").addEventListener("click", function() {
    if(modal.classList.contains('maximize')) {
        modal.classList.remove('maximize')
    }
})


