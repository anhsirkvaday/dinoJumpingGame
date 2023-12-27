window.onkeydown=(e)=>{
  console.log(e.code);
  if(e.keyCode==32 || e.code=='Space' || e.keyCode==38 || e.code=='ArrowUp'){
    document.getElementsByClassName('manRunner')[0].classList.add('jumpMan');
  }
  else if(e.keyCode==39 || e.code=='ArrowRight'){
    document.getElementsByClassName('manRunner')[0].classList.add('moveRight');
  }
  setTimeout(()=>{
    document.getElementsByClassName('manRunner')[0].classList.remove('jumpMan');
  },900);
}



