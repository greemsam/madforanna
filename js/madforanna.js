let diviceScreenWidth = screen.width;
let madness;
let trigger = false;
let numOfEchoes = 0;
let speedOfEchoes = 30;
if (diviceScreenWidth < 400){
  speedOfEchoes = 80;
}
const echoLimit = 621;

function active(){
  trigger = !trigger;
  changeButtonText(trigger);
  toggleMadnessFunctions(trigger);
  inputTextClickEvent();
  console.log(trigger);
}
function toggleMadnessFunctions(triggerValue){
  switch(triggerValue){
    case true: madness = setInterval(madnessFunctions, speedOfEchoes);
    break;
    case false: clearInterval(madness);
    break;
  }
}
function madnessFunctions(){
  numOfEchoes++;
  createEchoes();
  changeButtonText(trigger);
  screenFix();
  if(numOfEchoes > echoLimit){
    removeTags();
  }
  console.log(trigger, document.getElementsByClassName('anna-text').length, speedOfEchoes);
}
function createEchoes(){    
  const echoDiv = document.getElementById('echo');
  const annaSpan = document.createElement('span');
  createTags(echoDiv, annaSpan);
  createText(annaSpan);
  setTextStyle(annaSpan);
}
function removeTags(){ 
  const createdAnnaSpan = document.getElementsByTagName('span'); 
  createdAnnaSpan[0].remove();
}
function createTags(parentTagForCreate, childrenTags){
  parentTagForCreate.appendChild(childrenTags);
  childrenTags.setAttribute('class', 'anna-text');
}
function createText(textForTags){
  const annaText = document.createTextNode('안나!!');
  const queenText = document.createTextNode('여왕님!!');
  let getRandom = Math.floor(Math.random() * 2);
  switch(getRandom){
    case 0 : textForTags.appendChild(annaText);
    break;
    case 1 : textForTags.appendChild(queenText);
    break;
  }
}
function setTextStyle(textToAdjust){
  let randomTextSize;
  let randomTextMargin;
  if(diviceScreenWidth > 400){
    randomTextSize = Math.floor(Math.random() * (44 - 18)) + 18;
    randomTextMargin = Math.floor(Math.random() * (30 - 10)) + 10;
  }
  else if(diviceScreenWidth <= 400){
    randomTextSize = Math.floor(Math.random() * (26 - 16)) + 16;
    randomTextMargin = Math.floor(Math.random() * (22 - 5)) + 5;
  }
  textToAdjust.style.fontSize = `${randomTextSize}px`;
  textToAdjust.style.marginLeft = `${randomTextMargin}px`;
}
function changeButtonText(triggerValue){
  const mednessButton = document.getElementById('execute');
  if(triggerValue === true){
    mednessButton.innerHTML = '광기 중지하기';
  }
  else if(triggerValue === false){
    mednessButton.innerHTML = '계속 찬양하기'
  }
}
function screenFix(){
  const contentArea = document.getElementById('content-area');
  window.scrollTo(0, contentArea.offsetHeight);
}
function inputTextClickEvent(){
  let annaTextElements = document.getElementsByClassName('anna-text');
  for(let i = 0; i<annaTextElements.length; i++){
    if(trigger === false){
      annaTextElements[i].addEventListener('click', inputClasses);
    }
  }
}
function inputClasses(e){
  e.target.setAttribute('class', 'anna-picture');
}

