'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var numToGuess = getRandomInt(1, 101);
console.log(numToGuess);
var textSug = document.getElementById('text-suggestion');
var buttonCompare = document.getElementById('button-try');
buttonCompare.addEventListener('click', function () {
  var numTaken = parseInt(document.getElementById('take-number').value);
  if(numTaken === numToGuess) {
    textSug.innerHTML = 'Has acertado';
  } else if (numTaken < numToGuess) {
    textSug.innerHTML = 'El número es muy bajo';
  } else {
    textSug.innerHTML = 'El número es muy alto';
  }
});
