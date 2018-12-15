
                // global variables
                var counter = 0;
                var randomGem = Math.floor((Math.random() * 100) + 1);
                var score = 0;
   
                   // start game
               initiateGame();
   
                   // get value from picsGems by clicking on them
               $(".div-1").on("click", function(event){
                   var valueGem = parseInt($(this).attr("data-gem"));
                   valueGem = parseInt(valueGem);
                   counter += valueGem;
   
                   //-----------------------------//
                   // to make values of gems random! 
                   //-----------------------------//
                   // var otherGem = Math.floor((Math.random() * 10) + 1);
                   // otherGem = parseInt(otherGem);
                   // counter += otherGem; 
                   //-----------------------------//
   
                   // console.log(counter);
   
                   // display the number(random gems collected)
               $("#counterGems").empty();
               $("#counterGems").append(counter);
   
                       // score up function
                   if(counter===randomGem){  
                       score ++; 
                       $("#score1").empty();
                       $("#score1").append(score); 
                       alert('Good Job!');
                       $("#counterGems").empty();
                       counter = 0;
                       $("#collectGems").empty();
   
                       // initiane  new game after get score up
                       randomGem = Math.floor((Math.random() * 100) + 1);
   
                       // setting gems no less than 10
                       if(randomGem < 10){
                           randomGem = 10;
                        }
   
                        $("#collectGems").append(randomGem); 
                           
                   }
                       //win function
                       if(score===5){
                           alert("you are awesome!")
                           window.location.reload();
                       }
                       // game over
                       if(counter > randomGem){
                           alert('too bad');
                           window.location.reload();
                       }
               })
               
                       // initiate game function
               function initiateGame(){
                       // setting gems no less than 10
                   if(randomGem < 10){
                       randomGem = 10;
                   }
                $("#collectGems").append(randomGem);
               
               }
   