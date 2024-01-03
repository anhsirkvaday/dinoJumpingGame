let manRunner=document.getElementsByClassName('manRunner')[0];
let monster=document.getElementsByClassName('mosterRunning')[0];
let isJumping=false;
let jumpHeight=80;
let leftMove=300;

window.onkeydown=(e)=>{
  e.preventDefault();
  if(e.keyCode==32 || e.code=='Space' || e.keyCode==38 || e.code=='ArrowUp'){
    manJump(e);
  }
  else if(e.keyCode==39 || e.code=='ArrowRight'){
    leftMove+=30;
    manRunner.style.left=`${leftMove}px`;
  }
  else if(e.keyCode==37 || e.code=='ArrowLeft'){
    leftMove-=30;
    manRunner.style.left=`${leftMove}px`;
  }
}
function manJump(event){
  const jumpInterval=setInterval(()=>{
    if(jumpHeight>=300){
      clearInterval(jumpInterval);
      isJumping=false;
      manFall();
    }
    else{
      
      jumpHeight+=10;
      manRunner.style.bottom=`${jumpHeight}px`;
    }
  },18)
  console.log('manJump = '+jumpHeight);
}
function manFall(){
  const fallInterval=setInterval(()=>{
    if(jumpHeight<=80){
      clearInterval(fallInterval);
    }
    else{
      jumpHeight-=10;
      leftMove+=1;
      manRunner.style.left=`${leftMove}px`;
      manRunner.style.bottom=`${jumpHeight}px`;
    }
  },25);
}

// let aniDuration=5;
// setInterval(()=>{
//   aniDuration-=.2;
//   monster.style.animationDuration = `${aniDuration}s`;
//   console.log(aniDuration);
// },5000);

