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
var quizContainer = document.getElementById('quiz');
//declare quiz elements as an array
var quiz = [quiz1, quiz2, quiz3];
var highScore = document.getElementById('high-score');

//set time left in timer
var timeLeft = 20;

//set global array count
var arrayPosition = 0;

//variable for high score submit button
var scoreBtn = document.getElementById('score-btn');

//gets the item from local storage if it already exists OR establish scoreArray for array of scores
var scoreArray = JSON.parse(localStorage.getItem('scoreArray')) || [];
//set timeLeft = timeScore when quiz questions answered
var timeScore;


//function to submit initials and score
function saveAnswer() {
    //listen for click of initials submit button
    scoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
        //store initials
        var scoreInput = document.getElementById('initials').value;
        console.log(scoreInput);
        //if scoreInput doesnt exist, alert user
        if (!scoreInput) {
            alert('You need to add initials!');
            return;
        } else{
            //create saveScore as an object with initials and current time left
            var saveScore = {
                initials: scoreInput,
                score: timeScore
            };
            //pushes saveScore Object values to the array
            scoreArray.push(saveScore);
            //save array to local storage
            localStorage.setItem('scoreArray', JSON.stringify(scoreArray));
        }

    });
};

//function to call when the game is over to hide elements and show input
function gameOver() {
    //when question answered make quiz question disappear
    quizContainer.style.display = "none";
    //display high score initials input
    highScore.style.display="block";
    //set timeScore variable to current value of time left
    timeScore = timeLeft;
    //call saveAnswer to save array into local storage of values
    saveAnswer();
}

//function to countdown timer
function countdown() {
    
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
        //stop timer from running
        clearInterval(timeInterval);
        //call game over function if time runs out
        gameOver();
      }
      
  
    }, 1000);
  };


//onclick of each container
startGame.addEventListener("click", function() {
    //start timer
    countdown();
    //set value of display attribute on quiz 1 to block from none
    quiz1.style.display = "block";
    //listen for a click on each li.answer that is displayed
    document.querySelectorAll('.answer').forEach(item => {
        item.addEventListener('click', function(event) {
                //console log value of html element clicked in answer to find true or false
                console.log(event.target.getAttribute('value'));
                
                    //if value=true, then show next question
                    if (event.target.getAttribute('value') === 'false') {
                        //decrement timeLeft in timer by 1
                       timeLeft--;
                    };
                    //when question answered make quiz question disappear
                    quiz[arrayPosition].style.display = "none";
                    //once user answers a question, increment arrayPosition
                    arrayPosition++;
                    //if arrayPosition is greater than array number, ask for initials and high score
                    if (arrayPosition > quiz.length-1){
                        //call gameOver function to ask for initials and high score
                        gameOver();
                    }else{
                        //show next question
                        quiz[arrayPosition].style.display = "block";
                    }
            })
        }

    )
    
});



