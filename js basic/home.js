 console.log('hello')

// alert('yooo');

//variables
var b='smoothie';
console.log(b)

var somenumber=45;
// console.log(somenumber);

// document.getElementById('sometext').innerHTML='hey there';
 
// var age = prompt('what is your age?');
 
// document.getElementById('sometext').innerHTML= age;
 
// numbers in js
var num1 = 10;

// increment num1 by 1
num1++;

// decrement num1 by 1
num1--;
console.log(num1);

// divide,multiply *, remainder %
console.log(num1 % 6)

// increment/decrement by any number you want
num1 += 10;
console.log(num1);

/* functions
1.create a function
2.call the function
*/

// create
function fun(){
    console.log('this is my function');
}

// call
fun();

/*let create a function that takes in a name and says hello followed by your name

for example
 
name:"rabeea"
return:"hello rabeea"
*/

function greeting(yourname){
    
    var result ='hello' +' '+ yourname; //string concatenation
    console.log(result);
}

// var name =prompt('what is your name?');
// greeting(name);

// how do argument work in function?
// how do we add 2 numbers together in a function?

function sumnumbers(num1,num2){
    var result=num1 + num2;
    console.log(result);
}

sumnumbers(10,10);

/* while loops

var num = 0;

while (num < 100 ) {
       num += 1;
       console.log(num);
}

*/

// for loop
for (let num = 0; num <= 100; num++){
    console.log(num);
}

// data types
let yourage = 18; //number
let yourname = 'rab'; //string
let name ={first: 'rabe' , last:'hussain'};    //object
let trurh = false;                             //boolean
let groceries =['apple', 'banana', 'oranges']; //array
let random;                                   //undefined
let nothing = null;                           //value null

// strings in javascript (common methods)
let fruit = 'banana,apple,berry,orange';
let morefurits = 'banana\nappple';
console.log(morefurits);                     //newline
 
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2 ,6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLocaleLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by comma
console.log(fruit.split(''));  //split by characters

//array
let fruits =['banana','apple','orange','pineapple'];
fruits =new Array('banana','apple','orange','pineapple');

console.log(fruits[2]);  //access value at index 2nd

fruits[0] ='pear';
console.log(fruits);

for (let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string',fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(), fruits); //removes last item
console.log(fruits.push('blackberrie'), fruits); //appends
console.log(fruits[4]);
fruits[fruits.length]= 'newfruit'; //same as push
console.log(fruits)
fruits.shift();  //remove first element from an array
console.log(fruits)
fruits.unshift('kiwi'); //add first element to an array
console.log(fruits)

let vegtables=['tomato','cucumber','broccoli'];
let allgoroceries=fruits.concat(vegtables);
console.log(allgoroceries);
console.log(allgoroceries.slice(1,4));
console.log(allgoroceries.reverse());
console.log (allgoroceries.sort());
function myFunction(a,b){
    return a-b
}

let somenumbers = [5 , 10, 2, 25, 3, 225, 1, 2, 5, 334, 332 ,221];
 console.log (somenumbers.sort(function(a, b) {return a-b})); //sorted in a ascending order 

 let emptyarray = new Array();
 for (let num =0; num<=10; num++) {
     emptyarray.push(num);
 }
 console.log(emptyarray);

 //object is javascript
// dictionaries in python

let student = {first: 'rafeh', 
    last:'qazi', 
    age:12, 
    height:123,
    studentinfo: function (){
       return this.first + '\n' + this.last +'\n' + this.age;
    }
};

//console.log(student.first);
//console.log(student.last);
student.age++;
console.log(student.age);

console.log(student.studentinfo());

// conditionals , control flows(if else)
// 15-23 is my idea of demographic
// && and
// || or
var age= 45;
if ((age >=18) && (age <=35)){
    status = 'traget demo'
    console.log(status);
}else{
    status = 'not my audience';{
     console.log(status);
    }
}

// switch statements
  
switch (6){
     case 0:
         text ='weekend';
          break;
     case 5:
         text ='weekend';
          break;
     case 6:text ='weekend';
          break;
     default:
         text  ='weekday';
}

console.log(text);