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
var buttonSave = document.getElementById('button-save');
var tries = document.getElementById('tries-number');
var nameAndSave = document.querySelector('.save');
var numTaken = document.getElementById('take-number');
var nameTaken = document.getElementById('take-name');

var count = 0;

buttonCompare.addEventListener('click', function() {
  var numTakenValue = parseInt(numTaken.value);

  if(numTakenValue === numToGuess) {
    textSug.innerHTML = 'Has acertado';
    nameAndSave.style.display = 'flex';
  } else if (numTakenValue < numToGuess) {
    textSug.innerHTML = 'El número es muy bajo';
  } else {
    textSug.innerHTML = 'El número es muy alto';
  }
  count += 1;
  tries.innerHTML = count;
});

buttonSave.addEventListener('click', clickSave);

function clickSave(event){
  saveName();
  reset();
}

function saveName() {
  var nameTakenValue = (nameTaken.value);
  var listNames = document.getElementById('history-names');

  listNames.innerHTML += '<li>' + nameTakenValue + ' ' + count + ' ' + 'intentos' + '</li>';
}

function reset() {
  count = 0;
  tries.innerHTML = count;
  numTaken.value = '';
  nameTaken.value = '';
  nameAndSave.style.display = 'none';

  numToGuess = getRandomInt(1, 101);
}
