var count = 10;
var gameOver = `<div id="play__again" style = "display: none">
            <p class="">GAME OVER!</p>
            <button>Play Again</button>
        </div>`;
function getGuess(){
    // event.preventDefault()
    var guess = document.getElementById("guess").value;

    // var randomNumber = Math.floor(Math.random(100* 1));
    const  randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    var result = document.getElementById("result");
    if (!isNaN(guess)){
        result.innerHTML = `Your Input is Invalid, Please Input a numer between 1 and 100`;
    }
    if (count == 0){
        document.getElementById("input__section").style.display="none";
        document.getElementById("play__again").style.display="onset";
        document.getElementById("play__again").innerHTML= gameOver;}
    if (guess == randomNumber){
        result.innerHTML = `Your Guess is Correct!`;
        count = 10;


    } else if(guess > randomNumber){
        count= count-1;
        result.innerHTML = `Your Guess ${guess} is too high!, you have ${count} left`;
        
    } else if(guess < randomNumber){
        count = count-1;
        result.innerHTML = `Your Guess ${guess} is too low! you have ${count} left`
        }

}
 
function playAgain(){
    count = 10;
    document.getElementById("play__again").style.display="none";
    document.getElementById("input__section").style.display="onset";
}
