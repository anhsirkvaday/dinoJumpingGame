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
    }
},20);

document.getElementById('restart').addEventListener('click',()=>{
    location.reload();
})

