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




    
Abiola@DESKTOP-G4LA4KH MINGW64 ~/Desktop/game (main)
$ git remote add origin https://github.com/Lawa223/Guess-Number.git
error: remote origin already exists.

Abiola@DESKTOP-G4LA4KH MINGW64 ~/Desktop/starter (main)
$ git push -u origin main
info: please complete authentication in your browser...
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 1.76 KiB | 450.00 KiB/s, done.  
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Lawa223/Guess-Number.git
 * [new branch]      main -> main