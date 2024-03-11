let number = document.querySelector(".number")
let guess = document.querySelector(".guess")
let check = document.querySelector(".check")
let again = document.querySelector(".again")
let message = document.querySelector(".message")
let score = 20;
let highscore = 0;
let guessNumber = Math.trunc(Math.random () * 20) + 1;
console.log(guessNumber);



const displayMessage = function (message){
    document.querySelector(".message").textContent = message
};

    check.addEventListener ('click',function () {
        const guess =  Number(document.querySelector('.guess').value);
        if (!guess) {
            displayMessage("No number");
        }else if(guess === guessNumber){
            displayMessage('correct Number!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            
            number.textContent = guessNumber;
            number.style.width ='30rem';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }else if ( guess !== guessNumber ) {
            if(score > 1 ){
                displayMessage(guess > guessNumber ? 'Too High' : 'Too Low');
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                displayMessage('you lost the game');
            }
        }
    })


    again.addEventListener("click", function (){
      score = 20;
              
     score = 20;

     guessNumber = Math.trunc(Math.random () * 20) + 1;
     console.log(guessNumber);
      document.querySelector(".number").style.width = '15rem';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector(".message").textContent = 'start guessing.....';
      document.querySelector(".number").textContent  = "?"
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").value = "";

      


    })
     
      


   
 


    // let again = document.querySelector(".again")
    
    // function reload(){
    //  location.reload()
    //  }




    
