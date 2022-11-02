

// MODAL FOTO


//--SCROLL IMG--
let int = document.querySelector('.int');
let sub = document.querySelector('.sub');
let sub2 = document.querySelector('.sub2');

int.addEventListener("click", function() {
    
    sub.classList.toggle('scrollin');
    sub2.classList.toggle('sc2');
});



//---- scroll storia ----
let pansto = document.querySelector('.panel-sto');
let togsto = document.querySelector('.toggle-sto');

togsto.addEventListener("click", function() {
    
    pansto.classList.toggle('panin-sto');
});


