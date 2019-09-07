

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
    revComm[m].addEventListener( 'click', function(e){
        for(let m = 0; m<revCommLength; m++) {
            revComm[m].classList.remove('reviews-commentators_active');
            revList[m].classList.remove('reviews-list_active');
        }
        revComm[m].classList.add('reviews-commentators_active');
        revList[m].classList.add('reviews-list_active');
    })
}

                /* ОБРАБОТКА ВВОДА */

const phoneInput = document.querySelector('#phones');

phoneInput.addEventListener('keydown', function (event){
    let isDigit = false;

    if(event.key >= 0 || event.key <= 9 || event.key == '+' || event.key == '-' || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace'){
        isDigit = true;
    }
    if(!isDigit) {
      event.preventDefault();
    }
})
                    /* МОДАЛКА  */


const openButton = document.querySelector("#form__btn");
const successOverlayYes = createOverlay("Сообщение отправлено");
const successOverlayNo = createOverlay("Сообщение не отправлено");

function yes(e) {
  document.body.appendChild(successOverlayYes);
  document.body.style.overflow='hidden';
  myform.elements.btnReset.click();
}
function no(e) {
    document.body.appendChild(successOverlayNo);
    document.body.style.overflow='hidden';
  }

function createOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener("click", function(eve) {
    eve.preventDefault();
    document.body.style.overflow='visible';
    document.body.removeChild(overlayElement);
  });

  const contentElement = overlayElement.querySelector(".content");
  contentElement.innerHTML = content;

  return overlayElement;
}

                /* ФОРМА ОТПРАВКИ */

const myform = document.querySelector('#form-id');

openButton.addEventListener('click', function(e){
    e.preventDefault();
    if(validateForm(myform)) {
        
        const fd = new FormData(myform);
        fd.set('name', myform.elements.name.value);
        fd.set('phone', myform.elements.phone.value);
        fd.set('comment', myform.elements.comment.value);
        fd.append('to', 'test@gmail.com');

        const xhr = new XMLHttpRequest();

        xhr.responseType = 'json';
        xhr.open('POST','https://webdev-api.loftschool.com/sendmail', true);
        xhr.send(fd);
        xhr.addEventListener('load',()=>{
            if(xhr.response.status === 1) {
                yes(e);
                setTimeout(() => {
                    document.querySelector('.close').click();
                }, 2000);      
            } else {
                no(e);
                setTimeout(() => {
                    document.querySelector('.close').click();
                }, 2000);  
            } 
        })
    }
})
function validateForm(form) {
    let valid = true;

    if(!validateField(form.elements.name)) {
        valid = false;
    }
    if(!validateField(form.elements.phone)) {
        valid = false;
    }
    if(!validateField(form.elements.street)) {
        valid = false;
    }
    if(!validateField(form.elements.house)) {
        valid = false;
    }
    if(!validateField(form.elements.comment)) {
        valid = false;
    }
    return valid;
}
function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}


    