
// DETECTING MOUSE BUTTON PRESS

var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrums; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        
});

// DETECTING KEYBOARD PRESS
document.addEventListener("keypress", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
});
//FUNCTION(EVENT) IS A CALLBACK FUNCTION

function makeSound(key)
{
    switch(key)
        {
            case 'w':
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play(); 
                break;
            case 'a':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play(); 
            case 's':
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play(); 
                break;    break;
            case 'd':
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play(); 
                break;    
            case 'j':
                var snare = new Audio("sounds/snare.mp3");
                snare.play(); 
                break;
            case 'k':
                var crash = new Audio("sounds/crash.mp3");
                crash.play(); 
                break;
            case 'l':
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play(); 
                break;
            default:
        }
}

//ADDING ANIMAITON

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);

    //ADD ANIMATION
    activeButton.classList.add("pressed");

    //REMOVE ANIMATION AFTER 0.1 SEC
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}
// PRINTING WHAT KEY IS PRESSED ON KEYBOARD
// document.addEventListener("keypress", function(event)
// {
//     console.log(event);
// });


// FUNCTION CONSTRUCTOR AND ITS OBJECT
// function HouseKeeper(name,age,housePermit,languages){
//     this.name=name;
//     this.age=age;
//     this.housePermit=housePermit;
//     this.languages=languages;
//     this.clean = function(){
//         alert("Cleaned");
//     }
// }
// var hk1 = new HouseKeeper("timmy",19,true,["hindi","english"]);