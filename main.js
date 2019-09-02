

                /* ПОЛНОЭКРАННОЕ МЕНЮ */


const gambMenu = document.querySelector('.gamb-menu');
const icoGamb = document.querySelector('.header__gamburger');
const cross = document.querySelector('.gamb-menu__list', ':after');

icoGamb.addEventListener('click', function(e){
    gambMenu.style.display='block';
})

cross.addEventListener('click', function(e){
    gambMenu.style.display='none';
})



