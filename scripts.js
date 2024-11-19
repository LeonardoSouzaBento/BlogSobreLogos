let YValue = -285;

const container = document.getElementById("first");

//Rolagem com scroll//
function rolagemScroll(){
document.querySelector("#first").addEventListener("wheel", (event) => {
  event.preventDefault(); // Impede o comportamento padrão de rolagem
  if (event.deltaY > 0) {
    scrollDown();
  } else {
    scrollUp();
  }
});
}

/*Botões*/
function scrollUp() {
    if (YValue === -285) {YValue = 38;} 
    else if (YValue === -609) {YValue = -285;}
    translateImgs();
  }

function scrollDown() {
  if (YValue === -285) {YValue = -609;}
  else if (YValue === 38) {YValue = -285;} 
  translateImgs();
}

function translateImgs() {
    const images = document.querySelectorAll("#first img");

    images.forEach((img) => { img.style.transform = `translateY(${YValue}px)`;});
}