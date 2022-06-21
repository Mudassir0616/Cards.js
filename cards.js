let playersInfo = {
    name : "GOHAN",
    chips : 129
}
let firstcard = randomCard() ;
let secondcard = randomCard() ;
let cards = [firstcard]
let sum = firstcard ;
let isAlive = true;
let hasBlackJack = false;
let message ="";
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el")

let playerEl = document.getElementById("for")
playerEl.textContent = playersInfo.name + " - $" + playersInfo.chips


function randomCard(){
    let randomNumber = Math.floor(Math.random()*21)
    if (randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}

function game(){
    rendergame()
    randomCard()
}
function rendergame() {
    
cardEl.textContent = "Cards: "
for( let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " - " ;
    
}

if (sum <= 50){
    message = "Want to draw another card ? "
} else if(sum === 51){
    message = "You WON !!!"
    hasBlackJack = true;
} else{
    message = "You are OUT !"
    isAlive = false
}
messageEl.textContent = message;
sumEl.textContent = "Sum: " +  sum;
}

function getCard(){
   if (isAlive === true && hasBlackJack === false){
   let newcard = randomCard();
   sum += newcard
   cards.push(newcard)
   rendergame()
   }

}

// let player = {
//     name : "Mudassir",
//     chips : 18
// }

// let forEl = document.getElementById("for")
// forEl.textContent = player.name + ": $" + player.chips

