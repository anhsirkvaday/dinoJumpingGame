let manRunner=document.getElementsByClassName('manRunner')[0];
let monster=document.getElementsByClassName('mosterRunning')[0];
let leftMove=300;
let isJumping=false;
let score=0;

document.getElementById('start').addEventListener('click',()=>{
  monster.classList.add('monsterAni');
  document.getElementById('start').style.display='none';
})
window.onkeydown=(e)=>{
  e.preventDefault();
  if(e.keyCode==32 || e.code=='Space' || e.keyCode==38 || e.code=='ArrowUp'){
    if(isJumping==false){
      manJump();
      isJumping=true;
    }
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


let jumpHeight=6;
function manJump(){
  const jumpInterval=setInterval(()=>{
    if(jumpHeight>=35){
      clearInterval(jumpInterval);

      manFall();
    }
    else{
      jumpHeight+=1;
      manRunner.style.bottom=`${jumpHeight}%`;
    }
  },15)
  console.log('manJump = '+jumpHeight);
}
function manFall(){
  const fallInterval=setInterval(()=>{
    if(jumpHeight<=6){
      clearInterval(fallInterval);
      isJumping=false;
      score+=1;
      document.getElementById('scoreDisplay').innerText=score;
    }
    else{
      jumpHeight-=1;
      leftMove+=1;
      manRunner.style.left=`${leftMove}px`;
      manRunner.style.bottom=`${jumpHeight}%`;
    }
  },25);
}

let monsterX_AxisDistance=0;
let monsterY_AxisDistance=0;
let manX_AxisDistance;
let manY_AxisDistance;
let absoluteX=0;
let absoluteY=0;

let getMonsterValue=setInterval(()=>{
    monsterX_AxisDistance=parseInt(window.getComputedStyle(monster,null).getPropertyValue('left'));
    monsterY_AxisDistance=parseInt(window.getComputedStyle(monster,null).getPropertyValue('bottom'));
    manX_AxisDistance=parseInt(window.getComputedStyle(manRunner,null).getPropertyValue('left'));
    manY_AxisDistance=parseInt(window.getComputedStyle(manRunner,null).getPropertyValue('bottom'));
    absoluteX=Math.abs(manX_AxisDistance-monsterX_AxisDistance);
    absoluteY=Math.abs(manY_AxisDistance-monsterY_AxisDistance);
    console.log(monsterX_AxisDistance);
    if(absoluteX<90 && absoluteY <110){
        let imgGameOver=document.querySelectorAll('.gameOver img')[0];
        imgGameOver.style.display='block';
        document.getElementById('restart').style.display='block';
        monster.classList.remove('monsterAni');
        monster.style.left=monsterX_AxisDistance+"px";
        clearInterval(getMonsterValue);
        isJumping=true;
        score-=1;
    }
},20);

document.getElementById('restart').addEventListener('click',()=>{
    location.reload();
})
