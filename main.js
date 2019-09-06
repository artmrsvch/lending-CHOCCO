

                /* ПОЛНОЭКРАННОЕ МЕНЮ */


const gambMenu = document.querySelector('.gamb-menu');
const icoGamb = document.querySelector('.header__gamburger');
const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');
const gambMenuItems = document.querySelectorAll('.gamb-menu__item');



icoGamb.addEventListener('click', function(e){
   
    gambMenu.classList.toggle('gamb__activ');
    header.classList.toggle('header__activ');

    if (gambMenu.classList.contains('gamb__activ')){
        document.body.style.overflow='hidden';
        logo.style.opacity='0';
    } else {
        document.body.style.overflow='visible';
        logo.style.opacity='1';
    }
})

for(let i = 0;i<gambMenuItems.length; i++){
    gambMenuItems[i].addEventListener('click', function(e){
        e.stopPropagation();
        gambMenu.classList.remove('gamb__activ');
        header.classList.remove('header__activ');
        if(document.body.style.overflow=='hidden'){
            document.body.style.overflow='visible';
            logo.style.opacity='1';
        }
    })
}




             /* СЛАЙДЕР ГОРИЗОНТАЛЬНЫЙ */

const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.bar-menu__item');
const menuLength = menuItem.length;

menu.addEventListener('click', function(e) {
    for(let i = 0; i<menuLength; i++) {
        menuItem[i].classList.remove('bar-menu__hover_active')
    }
})
for(let i = 0; i<menuLength; i++){
    menuItem[i].addEventListener('click', function(e){
        e.stopPropagation();
        if (menuItem[i].classList.contains('bar-menu__hover_active')){
            menuItem[i].classList.remove('bar-menu__hover_active')} else {
                for(let i = 0; i<menuLength; i++){
                    menuItem[i].classList.remove('bar-menu__hover_active')
                }
                menuItem[i].classList.add('bar-menu__hover_active');
            }
    })
}

             /* СЛАЙДЕР TEAM */

const team = document.querySelector('.team');
const teamItem = document.querySelectorAll('.team-list__item');
const teamLength = teamItem.length;

team.addEventListener('click', function(e) {
    for(let i = 0; i<teamLength; i++) {
        teamItem[i].classList.remove('team-list__item_activ')
    }
})
for(let i = 0; i<teamLength; i++){
    teamItem[i].addEventListener('click', function(e){
        e.stopPropagation();
        if (teamItem[i].classList.contains('team-list__item_activ')){
            teamItem[i].classList.remove('team-list__item_activ')} else {
                for(let i = 0; i<teamLength; i++){
                    teamItem[i].classList.remove('team-list__item_activ')
                }
                teamItem[i].classList.add('team-list__item_activ');
            }
    })
}

                /* СЛАЙДЕР ОПИСАНИЕ */

const left = document.querySelector('.descript-menu__scroll-left');
const right = document.querySelector('.descript-menu__scroll-right');
const descSlider = document.querySelector('.descript-slider');

right.addEventListener('click', function(){
    swipe('right');
})
left.addEventListener('click', function(){
    swipe('left');
})
function swipe(direct){
    if(direct=='right'){
        descSlider.appendChild(descSlider.firstElementChild);
    } else {
        descSlider.insertBefore(descSlider.lastChild, descSlider.firstElementChild);
        
    }
}

                        /* ОТЗЫВЫ */

const revList = document.querySelectorAll('.reviews-list__item');
const revComm = document.querySelectorAll('.reviews-commentators__item');
const revCommLength = revComm.length;

for(let m = 0; m<revCommLength; m++){
    revComm[m].addEventListener('click', function(e){
        for(let m = 0; m<revCommLength; m++) {
            revComm[m].classList.remove('reviews-commentators_active');
            revList[m].classList.remove('reviews-list_active');
        }
        revComm[m].classList.add('reviews-commentators_active');
        revList[m].classList.add('reviews-list_active');
    })
}

