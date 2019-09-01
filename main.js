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
