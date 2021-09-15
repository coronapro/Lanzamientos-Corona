const card1 = document.getElementById("cardProduct1");
// const card2 = document.querySelector('.cardProduct2');
// const card3 = document.querySelector('.cardProduct3');
// const card4 = document.querySelector('.cardProduct4');
// const card5 = document.querySelector('.cardProduct5');
const slider = document.querySelector('.slider');


function slide () {
   slider.style.transform = "translateX(-75vw)";
}
slider.addEventListener("touchmove", slide);

// card1.addEventListener ("click",slide)
// card2.addEventListener ("click",slide)
// card3.addEventListener ("click",slide)
// card4.addEventListener ("click",slide)
// card5.addEventListener ("click",slide)