//document.addEventListener('DOMContentLoaded', function() {
//	const item = document.querySelector('.ciao / #ciao');
//	item.addEventListener('click', function() {
//		item.classList.toggle('.ciao' / '#ciao');
//	});
//});
//
//
// document.addEventListener -> addEventListener('load', function() {...}) -> 'load', 'click'
// window.addEventListener -> 'resize', 'scroll'
//
//
// DOMContentLoaded viene attivato quando il documento HTML è stato completamente caricato e analizzato. (Document Object Model) è pronto per essere manipolato con JavaScript.


// menu mobile
document.addEventListener('DOMContentLoaded', function() {
    
    const menu_Hamburger = document.querySelector('.mobile-hamburger');
    const menu = document.querySelector('.menu-mobile');

    menu_Hamburger.addEventListener('click', function() { //quando clicchi hamburger
        menu_Hamburger.classList.toggle('mobile-hamburger-open'); // modifica del hamburger
        menu.classList.toggle('menu-mobile-open'); // modifica del menu
    });
});



