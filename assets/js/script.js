//grab button value
//click button action
//create html to show question and answers as clickable actions
//when user clicks an answer, check if correct answer
    //if correct answer show correct and move to next question
    //if wrong, show wrong and let user try again


    //repeat for 3 questions
    //when user gets 3 correct answers
    //store timer value as high score


var startGame = document.getElementById("start-game");
var timerEl = document.getElementById('timer');

function countdown() {
    //set time left in timer
    var timeLeft = 60;
    //run function once a second
    var timeInterval = setInterval(function() {
      
      if (timeLeft >= 1 ) {
          //run time left every second
          timerEl.textContent = timeLeft;
          //decrement timeLeft
          timeLeft--;
      } else {
        timerEl.textContent = 'Time Up!';
        clearInterval(timeInterval);
      }
      
  
    }, 1000);
  };



//onclick of each container
startGame.addEventListener("click", countdown() );
