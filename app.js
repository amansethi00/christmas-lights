var btnOff = document.querySelector("#btn-off");
var btnOn = document.querySelector("#btn-on");
var circle = document.querySelectorAll(".circle");
var length = circle.length;
// console.log(circle);
const off=function(){
   for(var i=0;i<length;i++){
       circle[i].style.animation= "none";
   }
};
const on = function(){
    for(var i=0;i<length;i++){
        circle[i].removeAttribute("style");
    circle[i].style.animationPlayState = "running";
    circle[i].style.WebkitAnimationPlayState = "running";
    }
}
btnOff.addEventListener("click",off);
btnOn.addEventListener("click",on);