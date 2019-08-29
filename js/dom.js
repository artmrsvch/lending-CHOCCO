// Задание 1

const div1 = document.createElement('div');
document.body.appendChild(div1);
div1.textContent='Этот элемент создан при помощи DOM API';


// Задание 2

const div2 = document.createElement('div');
div2.textContent='Этот элемент тоже создан при помощи DOM API';
div2.className += 'inner';
div1.appendChild(div2);


// Задание 3

div1.style.color='red';

// Задание 4

div1.addEventListener('click', function(){
    console.log('Этот текст говорит о том, что я всё сделал правильно');
})

// Задание 5

const link = document.createElement('a');
link.setAttribute('href','https://loftschool.com');
link.textContent='https://loftschool.com';
document.body.appendChild(link);

link.addEventListener('click', function(){
    event.preventDefault();
    let clink = link.getAttribute('href');
    let result = 'Я кликнул на ссылку '+clink;
    console.log(result); 
})

// Задание 6 

const inp =document.createElement('input');
const btn =document.createElement('button');
btn.textContent='кнопка'
inp.style.display='block';
document.body.style.display='flex';
document.body.style.height='50vh';
document.body.style.flexDirection='column';
document.body.style.justifyContent='space-around';
document.body.appendChild(inp);
document.body.appendChild(btn);

btn.addEventListener('click', function(){
    let soo=inp.value;
    console.log(soo);
})

// Для себя

btn.addEventListener('mouseover', function(){
    document.body.style.background='red'
})
btn.addEventListener('mouseout', function(){
    document.body.style.transition='0.6s'
    document.body.style.background='#fff'

})

// Задание 7

