//Challenge 1:You Age in Days
function Ageindays(){
    var birthyear=prompt('What year were you born ?');
    var ageindays=(2019 - birthyear) * 365;
    var h1=document.createElement('h1')
    var textAnswer=document.createTextNode('You are' + ageindays + 'days old');
    h1.setAttribute('id','Ageindays');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1);        
}

function reset() {
    document.getElementById('Ageindays').remove();
}
 
//Challenge 2: Cat generator
function catgenerator(){
var image = document.createElement('img');
var div = document.getElementById('flex-cat-gen');
image.src="https://media2.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif";
div.appendChild(image);
}

//Challenge 3: rock, paper, scissors
function rpsgame(yourchoice) {
    console.log(yourchoice);
   // var humanchoice, botchoice;
   // humanchoice = yourchoice.id;
   botchoice = numbertochoice(randToRpsInt());
   console.log('botchoice-> ',botchoice)     
   //result = decideWinner(humanchoice, botchoice); //(0,1) human lost / bot win
   //message = finalmessage(result); // {'message':'you won!', 'color': 'green'}   
   //rpsFrontEnd(yourchoice.id, botchoice, message);
}
 function randToRpsInt() {
  return Math.floor (Math.random() * 3);
 }

 function numbertochoice(number) {
     return ['rock', 'paper', 'scissor'] [number];
 }