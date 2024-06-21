var count = 10;
const  getrandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function getGuess(){

    var guess = document.getElementById("guess").value;
       var randomNumber = getrandomNumber(1,100);
    var result = document.getElementById("result");
    if (!isNaN(guess)){
        result.innerHTML = `Your Input is Invalid, Please Input a numer between 1 and 100, \n you have ${count} left`;
    }
    if (count == 0){
        document.getElementById("input__section").style.display="none";
        document.getElementById("play__again").style.display="";
        
        }
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
    window.location.reload();
}
