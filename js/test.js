
                    //   Типы данных и переменные

/*

var name = 'Артем';
console.log(name);

name = 'Маша'

console.log(name);

*/

                     //   Условный оператор if

/*

if  (11<10) {
    let yes = 'Заработало'                         //Если утверждение ВЕРНО, то выполняет команду console.log(yes);
    console.log(yes);                              
}else {
    let no = 'хуяку'                               //Если утверждение НЕВЕРНО, то выполнить команду console.log(no);
    console.log(no);

}

*/


                    //   Циклический оператор for

/*

for (var select = 0; select < 10; select++) {      
    console.log(select);
}

*/


                            //   Функции:
                          
/*
function sum (p1,p2,p3) {
    var result = p1+p2+p3;
    return result;                                  //Возвратить результат в переменную, в которой вызывали функцию(перезапишет на результат);
}

var summa = sum(10,20,30);

console.log(summa); 

summa = sum(13,21,32);
console.log(summa); 

summa = sum(133,321,32);
console.log(summa); 
*/


                            // Массивы. Задание 1.
/*
var object = ['привет','loftschool'];
object.push('я изучаю');
object.push('javascript');

console.log(object.length);                          //Сумма элементов массива;

for (var coll=0; coll<object.length; coll++) {       //Вывести все элементы массива в консоль;
    console.log(object[coll]);
}
*/


                            // Массивы. Задание 2.
/*
var mas=['123','23','567','33','676','6','4','234','3','44'];
for (var num = 0; num<mas.length; num++) {
    if (mas[num]>100) {
        console.log(mas[num]);                        //Вывести элементы массива, если они больше 100;
    } else {
        let net='Число меньше 100';
        console.log(net);                             //Если число меньше 100, то вывести текст;
    }
}
*/

                            // Массивы. Задание 3.
 /*     
var obj= {
    name: 'Артем',
    lastName: 'Забиров',
    age: '24'
}

//console.log(obj.name);                                //Точечно обращаемся к элементу объекта (Способ 1);
//console.log(obj['lastName']);                         //Обращаемся к элементу объекта (Способ 2);
//console.log(obj.age);

obj.name='Артемий';                                   //Перезаписываем свойство в объект;
obj.work='программист';                               //Записываем новое свойство в объект;

//console.log(obj.name);   
//console.log(obj.work);   


                            // Массивы. Задание 4.  

function hello(human) {
    var rest = 'Привет, меня зовут '+obj.name + obj.lastName+' и мне '+obj.age+ ' года, к сожалению(!';
    return rest;
}                            

var est=hello(obj);
console.log(est);
*/