

let players={
  name:"bayan",
  chips:155
}

let hasBlackJack=false;
let isAlive=false;
let message="";
let cards=[];
let sum=0;
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("card-el");
let playerEl=document.getElementById("player-el");
playerEl.textContent=players.name+": $"+players.chips;


function getRandomCard(){
   let randomNumber=Math.floor(Math.random()*13) + 1;
 
  if(randomNumber > 10){
    return 10;
  }else if (randomNumber ===1 ){
   return 11;
}else {
  return randomNumber;
}
}
function StartGame(){
  isAlive=true;
  let firstCard=getRandomCard();
let secondCard= getRandomCard();
  cards=[firstCard, secondCard ];
  sum=firstCard+secondCard;
  RendertGame();
}

function RendertGame(){
  //sumEl.textContent+=sum;
  sumEl.textContent="sum: " + sum;
  cardEl.textContent="Cards:" ;
  for(let i=0; i < cards.length; i++){
    cardEl.textContent+=cards[i] +"  ";
  }
if(sum <= 20) {
  message="Do you want to draw a new card?";
} else if (sum === 21) {
  message="Wohoo! You've got Blackjack!";
  hasBlackJack=true;
} else  {
  message="You're out of the game";
  isAlive=false;
}
  messageEl.textContent=message;
}

function NewCard(){
  if(isAlive===true && hasBlackJack===false){
  console.log("Drawing a new card from the deck!");
  let card=getRandomCard();
  sum+=card;
  cards.push(card);
 
  RendertGame();
}
}


