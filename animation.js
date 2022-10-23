// STORIA
let item = document.querySelector('.toggle');
let panel = document.querySelector('.panel');
let sec1 = document.querySelector('.sec1');

item.addEventListener("click", function() {
    panel.classList.toggle('active');

    sec1.classList.toggle('sec1_j');
});


// MAIL ANIMATION
let submit_Button = document.querySelector('.submit_Button');

submit_Button.addEventListener("click", function() {
    submit_Button.classList.toggle('borderyes');
});




// MODAL FOTO

