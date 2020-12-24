const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener("click", function() {
        const postId = card.getAttribute("id") ///// a variavel deve armazenar starter,gostack, algo assim 

        window.location.href = https://rocketseat.com.br/${course.id} // o correto seria passar a mesma variavel postId aqui 
    })
}