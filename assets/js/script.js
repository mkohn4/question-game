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
//declare quiz elements as an array
var quiz = [quiz1, quiz2, quiz3 ];
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

//high score page
//variable for button to display scores
var displayScoreBtn = document.getElementById('display-score-btn');
//get score divs
var displayScore = document.getElementById('display-score');






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
        //stop timer from continuing to decrement
        clearInterval(timeInterval);
      }
      
  
    }, 1000);
  };



function saveAnswer() {
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
            //saveScore as an object with initials and current time left
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


/*displayScoreBtn.addEventListener("click", function displayScores() {
    //when user clicks button
    //iterate through array of scoreArray
    //display values of array as text in the
    var listEl = document.createElement("ol");
    for (i=0; i < scoreArray.length; i++) {
        var li1 = document.createElement("li");
        li1.textContent = JSON.stringify(scoreArray[i].initials + ": " + scoreArray[i].score);
        displayScore.appendChild(listEl);
        listEl.appendChild(li1);

    };
});*/

//onclick of each container
startGame.addEventListener("click", function() {
    countdown();
    //set value of display attribute on quiz 1 to block from none
    quiz1.style.display = "block";

    document.querySelectorAll('.answer').forEach(item => {
        item.addEventListener('click', function(event) {
                //console log value of html element clicked in answer to find true or false
                console.log(event.target.getAttribute('value'));
                
                    //if value=true, then show next question
                    if (event.target.getAttribute('value') === 'false') {
                       timeLeft--;
                    };
                    //when question answered make quiz question disappear
                    quiz[arrayPosition].style.display = "none";
                    //once user answers a question, increment arrayPosition
                    arrayPosition++;
                    //if arrayPosition is greater than array number, ask for initials and high score
                    if (arrayPosition > quiz.length-1 || timeLeft < 1){
                        //display high score initials input
                        highScore.style.display="block";
                        //set timeScore variable to current value of time left
                        timeScore = timeLeft;
                        //call saveAnswer to save array into local storage of values
                        saveAnswer();
                    }else{
                        //show next question
                        quiz[arrayPosition].style.display = "block";
                    }
            })
        }

    )
    
});



