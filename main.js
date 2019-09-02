/*Menu slider*/

//button close
const teamList = document.querySelector('.team-list');
const teamItem = document.querySelector('.team-list_activ')
const spoilerTeam = document.querySelector('.team-list-content');
const spoilerTeamAct = document.querySelector('team-list_activ');

teamList.addEventListener('click', function(e){
    for (i=0; i < teamList.childNodes.length; i++){
        if (i === 5) {
            teamList.childNodes[i].classList.toggle('team-list_activ');
        } else {
            continue;
        }
    }

})


                /* ПОЛНОЭКРАННОЕ МЕНЮ */


const gambMenu = document.querySelector('.gamb-menu');
const gambMenuAf = document.querySelector('.gamb-menu', ':after');
const gambMenuBf = document.querySelector('.gamb-menu', ':before');
const icoGamb = document.querySelector('.header__gamburger');
const cross = document.querySelector('.gamb-menu__list', ':after');

icoGamb.addEventListener('click', function(e){
    gambMenu.style.display='block';
    icoGambBf.style.content='none';
    icoGamb.style.background
    icoGamb.style
    icoGamb.style
})

cross.addEventListener('click', function(e){
    gambMenu.style.display='none';
})