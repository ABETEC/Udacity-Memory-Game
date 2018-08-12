/*
 * Create a list that holds all of your cards
 */

const icons = ["fa fa-diamond",
"fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond",
"fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

//The Deck container
const cardDeck =
      document.querySelector(".deck");
let flippedCards = []
let matchedCards = []

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
  *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
shuffle(icons);
/*
*Building The Cards
*/
  function init() {
  for (let i = 0; i <deckCards.length; i++)
  {
  const card =
        document.CreateElement("li");
    card.classList.add("card");
                       card.innerHTML = "<i
  class="$(icons[i]}" ></i>;
                       cardDeck.appendChild(card);
    
  //Add Click Event to the cards
click(cards);
  }
  }
/* 
*Click event for cards
*/
let firstClick = true;
function click(card) {
      card.addEventListener ("click",
          function() {
            //if Card is clicked start timer
            if(isFirstClick) {
                  // Start our timer
                  startTimer();
                  // Change our First Click indicator's value
                  isFirstClick = false;
            }
            //Opened cards variables
            const currentCard = this;
            const lastCard = flippedCards[0];
            //The OPENED card event 
            if (flippedCards.length === 1) {
                  //Reveals flipped card
                  card.classList.add("open","show");
                  flippedCards.push(this);
                  //Compare two cards that are open
                  compare (currentCard,lastCard);
            } else {
                  currentCard.classList.add("open", "show",,"disabled");
                  flippedCrads.push(this);
            }
      });
                             }
/*
*collates the 2 cards
*/
function compare(currentCard,lastCard) {
      if (rrentCard.innerHTML ===
          lastCard.innerHTML) {
            //The Cards Ara Matched
            currentCard.classList.add("match");
            lastCard.classList.add("matcha")
            matchedCards,push(currentCard,lastCard);
            flippedCards = [],
                  //Chack if the game is over
                  allDone();
      }else {
            //Wait time 500ms then do this
            setTimeout (Function() {
                        currentCard.classList.remove("open","show","disabled");
            lastCard.classList.remove("open","show","disabled");
            
                  
                  
                  
                  

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        cu CardsrrentIndex -= 1;is
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
/*"
*Rating System
*/
            const starHolder =
                  document.querySelector(".stars");
            starHolder.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class= "fa fa-star"></i></li>';
        function rate() {
              if (moves= 15) {
                    starHolder.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
              }
              if (moves 25) {
                    starHolder.innerHTML = '<li><i class="fa fa-star"></i></li>';
              }
        }
            /*
            *Timer fuctions
            */
            const timerContainer =
                  document.querySelector(".timer");
            let liveTimer,
                totalSeconds = 0;
            //set default value to the timer's container
            timerContainer.innerHTML = totalSeconds + 's';
            function starTimer(){
                  liveTimer = setInterval(function() {
                        //increase total seconds by 1
                        totalSeconds++;
                        //Update the HTML container with the new time
                        timerContainer.innerHTML = 
                              totalSeconds + 's';
                  }, 1000);
            }
            //To stop the timer
            function stopTimer() {
                  clearInterval(liveTimer);
            }
           /*
           * Reset button resets the game 
           */
            const resetBtn =
                  document.querySelector(".restart");
            resetBtn.addEventListner("click",
                                     function(){
                  //Delete All Cards
                  cardDeck.innerHTML = "";
                  //Call Init to create new cards
                  init();
                  //Reset all variables
                  
                  //Reset moves
                  martchedCards = [];
                  moves = 0;
                  movesHolder.innerHTML = moves;
                  
                  //Reset rating
                  starHolder.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>;
                 //reset timer 
                  stopTimer();
                  isFirstClick = true;
                  totalSeconds = 0;
                  timerContainer.innerHTML = totalSeconds + "s";
                  //re-shuffles cards
                  shuffle(icons);
            });
            /*
            *starts the game
            */
            init();
            /*
            *Display the cards on the page
            * - shuffle the list of the cards using the provided "shuffle" method below
            * - loop through each card and create its HTML
            * - add each card's HTML to the page
            */
                                       

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
