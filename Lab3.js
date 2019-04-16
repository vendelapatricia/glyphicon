//Lab3.js

'use strict';
window.addEventListener('load', prepareNestedUnorderedList);    //blir en händelsehanterare till prepareNestedUnorderedList
function prepareNestedUnorderedList() {
    let list = document.querySelectorAll('.glyphicon-minus'); // hämtar upp alla glyphicon-minus
    for(var i = 0; i<list.length; i++){                       // en for-loop som går igenom alla glyphicon-minus och lägger till en lyssnare
      let ul = list[i].querySelector('.ulChildMax');
      ul.classList.replace('ulChildMax', 'ulChildMin'); // ersätter ulChildMax med ulChildMin
}

let glyphicon = document.querySelectorAll('.glyphicon');
for(var j = 0; j<glyphicon.length; j++){
glyphicon[j].classList.replace('glyphicon-minus','glyphicon-plus');
glyphicon[j].addEventListener('click',changeUnorderedListElement);  //händelsehanterare till changeUnorderedListElement när du klickar på ikonerna
let text = event.target.querySelector('ulChildMax');
}
}           //prepareNestedUnorderedList = döljer listor och sätter ikonerna till plus, lyssnare ska sättas på alla ikoner.

function changeUnorderedListElement( event ) {
console.log(event.target); // target, det elementet som det triggades på
let title = event.target.title;
//kollar efter en title i html koden. parent är själva ikonen
if(title === "parent"){
if(event.currentTarget.classList.contains('glyphicon-minus')){
  event.currentTarget.classList.replace('glyphicon-minus','glyphicon-plus');   //gör minus till plus
  let text = event.target.querySelector('ul');                    //text kallar på ul
  text.classList.replace('ulChildMax', 'ulChildMin');             //byter plats på max och blir min istället
}
else {
  event.currentTarget.classList.replace('glyphicon-plus','glyphicon-minus');  //gör plus till minus
  let text = event.target.querySelector('ul');           //text kallar på ul
  text.classList.replace('ulChildMin', 'ulChildMax');   //byter plats på min och blir max istället.
}
}        
}
