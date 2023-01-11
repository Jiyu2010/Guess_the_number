// random value generated
playername=localStorage.getItem("player_name");

var guess=1;


var y = Math.floor(Math.random()*10+1);
// function for number guessed by user 
function submit()
{

var x = document.getElementById("guessField").value; 

  
// counting the number of guesses
if(x == y)
{
    alert("CONGRATULATIONS!!!"+playername+"YOU GUESSED IT RIGHT IN"
    +guess+"GUESS");
    guess= 1;
}
else if(x>y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")

}
}

// made for correct Guess

function playAgain(){
    y = Math.floor(Math.random() * 10+1);
}
