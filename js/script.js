function playDice(){

  let btnSound = new Audio("sounds/crash.mp3");
  btnSound.play();
  let numberOneToSix = Math.floor(Math.random()*6)+1;
  let numberOneToSixV2 = Math.floor(Math.random()*6)+1;

  if(numberOneToSix === numberOneToSixV2){
    document.querySelector("h1").textContent = "Draw!";
    document.querySelectorAll("img")[0].setAttribute("src", "images/dadu"+numberOneToSix+".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dadu"+numberOneToSixV2+".png");
  }else if(numberOneToSix > numberOneToSixV2){
    document.querySelector("h1").textContent = "🏆Player 1 Win!";
    document.querySelectorAll("img")[0].setAttribute("src", "images/dadu"+numberOneToSix+".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dadu"+numberOneToSixV2+".png");
  }else if(numberOneToSix < numberOneToSixV2){
    document.querySelector("h1").textContent = "Player 2 Win!🏆";
    document.querySelectorAll("img")[0].setAttribute("src", "images/dadu"+numberOneToSix+".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dadu"+numberOneToSixV2+".png");
  }else{
    document.querySelectorAll("img")[0].setAttribute("src", "images/dadu1.png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dadu1.png");
  }
}
