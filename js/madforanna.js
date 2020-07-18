var madness;
var echoDiv;
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
          case true: madness = setInterval(madnessOn.createAnnaTag, 10);
          break;
          case false: clearInterval(madness);
          break;
        }
      }
    },
    createAnnaTag:()=>{
      var echoDiv = document.getElementById('echo');
      var annaSpan = document.createElement('span');
      var annaText = document.createTextNode('안나!!');
      var queenText = document.createTextNode('여왕님!!');
      numOfEchoes++;
      madnessOn.changeButtonText(trigger);
      echoDiv.appendChild(annaSpan);
      var getRandom = Math.floor(Math.random() * 2);
      switch(getRandom){
        case 0 : annaSpan.appendChild(annaText);
        break;
        case 1 : annaSpan.appendChild(queenText);
        break;
      }
      if(numOfEchoes >= echoLimit){
        trigger = false;
        clearInterval(madness);
      }
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
  }
});

// window.onscroll = function(){
//   var buttonWrap = document.getElementById('button-wrap');
//   var contentArea = document.getElementById('content-area').offsetHeight;
//   if(window.scrollY > contentArea){
//     buttonWrap.setAttribute('class', 'fixed');
//   }
//   else{
//     buttonWrap.classList.remove('fixed');
//   }
// }