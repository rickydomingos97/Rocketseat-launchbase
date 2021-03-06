/* const cards = document.querySelectorAll('.card');
const cursocard = document.querySelectorAll('.card__image-container')

for(let card of cards) {
    card.addEventListener("click", function() {
        const IdFrame = card.getAttribute("item.id")

        window.location.href="/courses{{IdFrame}}" 
    })
} */

const cursos = document.querySelectorAll('.card')

for(let curso of cursos){
    curso.addEventListener("click", function(){

        const urlID = curso.getAttribute("id")
        
        window.location.href = `/courses/${urlID}`
        
    })
}
