var madness;
var executeButton = document.getElementById('execute');
var echoDiv = document.getElementById('echo');
var trigger = false;
var madnessOn = new Vue({
  el:'#madness',
  data:{},
  methods:{
    setMadness:()=>{
      trigger = !trigger;
      switch(trigger){
        case true: 
        madness = setInterval(madnessOn.createAnnaTag, 30);
        executeButton.innerHTML = '광기중지';
        break;
        case false:
        clearInterval(madness);
        executeButton.innerHTML = '계속 찬양하기'
        break;
      }
      // console.log(trigger);
    },
    createAnnaTag:()=>{
      var echoDiv = document.getElementById('echo');
      var annaSpan = document.createElement('span');
      var annaText = document.createTextNode('안나!!');
      var queenText = document.createTextNode('여왕님!!');
      echoDiv.appendChild(annaSpan);
      var getRandom = Math.floor(Math.random() * 2);
      switch(getRandom){
        case 0 : annaSpan.appendChild(annaText);
        break;
        case 1 : annaSpan.appendChild(queenText);
        break;
      }
      // console.log(annaSpan.length);
    }
  }
});
