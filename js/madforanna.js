var madness;
var madnessOn = new Vue({
  el:'#madness',
  data:{
    trigger:0
  },
  methods:{
    setTrigger:()=>{
      madnessOn.trigger++;
      if(madnessOn.trigger>1){
        madnessOn.trigger = 0;
      }
    },
    textWrite:(triggerValue)=>{
      var executeButton = document.getElementById('execute');
      var theMaxNumberOfAnna = 0;
      while(theMaxNumberOfAnna < 300){
        if(triggerValue === 1){
          theMaxNumberOfAnna++;
          madness = setInterval(madnessOn.createAnna, 30);
          executeButton.innerHTML = '광기중지'
        }else{
          clearInterval(madness);
          executeButton.innerHTML = '계속 찬양하기'
        }
        console.log(theMaxNumberOfAnna);
      }
    },
    createAnna:()=>{
      var echoDiv = document.getElementById('echo');
      var annaSpan = document.createElement('span');
      var getRandom = Math.floor(Math.random() * 2);
      var annaText = document.createTextNode('안나!!');
      var queenText = document.createTextNode('여왕님!!');
      switch(getRandom){
        case 0 : annaSpan.appendChild(annaText);
        break;
        case 1 : annaSpan.appendChild(queenText);
        break;
      }
      echoDiv.appendChild(annaSpan);
    },
  },
});
