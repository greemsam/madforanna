var madness;
var numOfEchoes = 0;
var echoLimit = 621;
var trigger = false;
var madnessOn = new Vue({
  el:'#madness',
  data:{},
  methods:{
    setMadness:()=>{
      if(numOfEchoes < echoLimit){
        trigger = !trigger;
        madnessOn.changeButtonText(trigger);
        switch(trigger){
          case true: madness = setInterval(madnessOn.activeMadness, 10);
          break;
          case false: clearInterval(madness);
          break;
        }
      }
    },
    activeMadness:()=>{
      numOfEchoes++;
      madnessOn.createEchoes();
      madnessOn.changeButtonText(trigger);
      madnessOn.screenFix();
      if(numOfEchoes >= echoLimit){
        trigger = false;
        clearInterval(madness);
      }
      console.log(trigger);
    },
    createEchoes:()=>{    
      var echoDiv = document.getElementById('echo');
      var annaSpan = document.createElement('span');
      madnessOn.createTags(echoDiv, annaSpan);
      madnessOn.createText(annaSpan);
      madnessOn.setTextStyle(annaSpan);
    },
    createTags:(parentTagForCreate, childrenTags)=>{
      parentTagForCreate.appendChild(childrenTags);
    },
    createText:(textForTags)=>{
      var annaText = document.createTextNode('안나!!');
      var queenText = document.createTextNode('여왕님!!');
      var getRandom = Math.floor(Math.random() * 2);
      switch(getRandom){
        case 0 : textForTags.appendChild(annaText);
        break;
        case 1 : textForTags.appendChild(queenText);
        break;
      }
    },
    setTextStyle:(textToAdjust)=>{
      var diviceScreenWidth = screen.width;
      var getRandomTextSize;
      var getRandomTextMargin;
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
      var mednessButton = document.getElementById('execute');
      if(triggerValue === true && numOfEchoes < echoLimit){
        mednessButton.innerHTML = '광기 중지하기';
      }
      else if(triggerValue === false && numOfEchoes < echoLimit){
        mednessButton.innerHTML = '계속 찬양하기'
      }
      else if(numOfEchoes >= echoLimit){
        mednessButton.innerHTML = '더 이상 찬양불가'
      }
    },
    screenFix:()=>{
      var madnessArea = document.getElementById('madness');
      window.scrollTo(0, madnessArea.offsetHeight);
    }
  }
});