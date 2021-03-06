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
var arrNamesScore = [];
var nameSaved;

var count = 0;

buttonCompare.addEventListener('click', function() {
  var numTakenValue = parseInt(numTaken.value);

  if (numTakenValue < 0 || numTakenValue > 100) {
    alert('Inserta un número entre 1 y 100');
  }else if (isNaN(numTakenValue)) {
    alert('Solo acepta números');
  }else if (numTakenValue === numToGuess) {
    textSug.innerHTML = 'Has acertado';
    nameAndSave.style.display = 'flex';
  }else if (numTakenValue < numToGuess) {
    textSug.innerHTML = 'El número es muy bajo';
  }else {
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
  nameSaved = nameTakenValue;
  var listNames = document.getElementById('history-names');
  var scorelist = '';
  var saves = {
    name: nameTakenValue,
    score: count
  };

  arrNamesScore.push(saves);
  for (var i = 0; i < arrNamesScore.length; i++) {
    scorelist += '<li>' + arrNamesScore[i].name + ' ' + arrNamesScore[i].score + ' intentos' + '</li>';
  }
  listNames.innerHTML = scorelist;
}

function reset() {
  count = 0;
  tries.innerHTML = count;
  numTaken.value = '';
  // nameTaken.value = '';
  nameAndSave.style.display = 'none';

  numToGuess = getRandomInt(1, 101);
}
