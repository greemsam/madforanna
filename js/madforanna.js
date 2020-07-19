let madness;
let trigger = false;
let numOfEchoes = 0;
const echoLimit = 621;
const madnessObject = new Vue({
  el:'#madness',
  data:{},
  methods:{
    active:()=>{
      if(numOfEchoes < echoLimit){
        trigger = !trigger;
        madnessObject.changeButtonText(trigger);
        madnessObject.toggleMadnessFunctions(trigger);
        madnessObject.inputTextClickEvent();
      }
      console.log(trigger);
    },
    toggleMadnessFunctions:(triggerValue)=>{
      switch(triggerValue){
        case true: madness = setInterval(madnessObject.madnessFunctions, 30);
        break;
        case false: clearInterval(madness);
        break;
      }
    },
    madnessFunctions:()=>{
      numOfEchoes++;
      madnessObject.createEchoes();
      madnessObject.changeButtonText(trigger);
      madnessObject.screenFix();
      if(numOfEchoes >= echoLimit){
        trigger = false;
        clearInterval(madness);
      }
    },
    createEchoes:()=>{    
      const echoDiv = document.getElementById('echo');
      const annaSpan = document.createElement('span');
      madnessObject.createTags(echoDiv, annaSpan);
      madnessObject.createText(annaSpan);
      madnessObject.setTextStyle(annaSpan);
    },
    createTags:(parentTagForCreate, childrenTags)=>{
      parentTagForCreate.appendChild(childrenTags);
      childrenTags.setAttribute('class', 'anna-text');
    },
    createText:(textForTags)=>{
      const annaText = document.createTextNode('안나!!');
      const queenText = document.createTextNode('여왕님!!');
      let getRandom = Math.floor(Math.random() * 2);
      switch(getRandom){
        case 0 : textForTags.appendChild(annaText);
        break;
        case 1 : textForTags.appendChild(queenText);
        break;
      }
    },
    setTextStyle:(textToAdjust)=>{
      let diviceScreenWidth = screen.width;
      let getRandomTextSize;
      let getRandomTextMargin;
      if(diviceScreenWidth > 400){
        getRandomTextSize = Math.floor(Math.random() * (44 - 18)) + 18;
        getRandomTextMargin = Math.floor(Math.random() * (30 - 10)) + 10;
      }
      else if(diviceScreenWidth <= 400){
        getRandomTextSize = Math.floor(Math.random() * (26 - 16)) + 16;
        getRandomTextMargin = Math.floor(Math.random() * (22 - 5)) + 5;
      }
      textToAdjust.style.fontSize = `${getRandomTextSize}px`;
      textToAdjust.style.marginLeft = `${getRandomTextMargin}px`;
    },
    changeButtonText:(triggerValue)=>{
      const mednessButton = document.getElementById('execute');
      if(triggerValue === true && numOfEchoes < echoLimit){
        mednessButton.innerHTML = '광기 중지하기';
      }
      else if(triggerValue === false && numOfEchoes < echoLimit){
        mednessButton.innerHTML = '계속 찬양하기'
      }
      else if(numOfEchoes >= echoLimit){
        mednessButton.innerHTML = '충분히 찬양 하였습니다.'
      }
    },
    screenFix:()=>{
      const contentArea = document.getElementById('content-area');
      window.scrollTo(0, contentArea.offsetHeight);
    },
    inputTextClickEvent:()=>{
      let annaTextElements = document.getElementsByClassName('anna-text');
      for(let i = 0; i<annaTextElements.length; i++){
        if(trigger === false){
          annaTextElements[i].addEventListener('click', madnessObject.inputClasses);
        }
      }
    },
    inputClasses:(e)=>{
      e.target.setAttribute('class', 'anna-picture');
    }
  }
});
