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
