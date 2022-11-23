

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


//button
alert("Aeromik ti fa un regalo di Natale, trova il pulsante e riscattalo!" )

var name = prompt ("scrivi qui il tuo nome per ricevere il regalo");

if (name == null || name == "") {
    txt = "Riscrivi il nome";
}

else {
    txt = "Salve," + name + ",clicca ok per riscattare la sorpresa";
}



