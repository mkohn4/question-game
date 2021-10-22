//grab button value
//click button action
//create html to show question and answers as clickable actions
//when user clicks an answer, check if correct answer
    //if correct answer show correct and move to next question
    //if wrong, show wrong and let user try again


    //repeat for 3 questions
    //when user gets 3 correct answers
    //store timer value as high score

/*GIVEN I am taking a code quiz
WHEN I click the Start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/


var startGame = document.getElementById("start-game");
var timerEl = document.getElementById('timer');
var quiz1 = document.getElementById('quiz-1');
var quiz2 = document.getElementById('quiz-2');
var quiz3 = document.getElementById('quiz-3');


function countdown() {
    //set time left in timer
    var timeLeft = 5;
    //run function once a second
    var timeInterval = setInterval(function() {
      
      if (timeLeft >= 1 ) {
          //run time left every second
          timerEl.textContent = timeLeft;
          //decrement timeLeft
          timeLeft--;
      } else {
          //show time up when time runs out
        timerEl.textContent = 'Time Up!';
        //stop timer from continuing to decrement
        clearInterval(timeInterval);
      }
      
  
    }, 1000);
  };



//onclick of each container
startGame.addEventListener("click", function() {
    countdown();
    //set value of display attribute on quiz 1 to block from none
    quiz1.style.display = "block";
    
    

    
});
