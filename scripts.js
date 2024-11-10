let translateYValue = -285;

function scrollUp() {
    if (translateYValue === -285) {
      translateYValue = 38;
    } else if (translateYValue === -609) {
        translateYValue = -285;
      }
    updateTranslateY();
  }

  function scrollDown() {
    if (translateYValue === 38) {
      translateYValue = -285;
    } else if (translateYValue === -285) {
      translateYValue = -609;
    }
    updateTranslateY();
  }

function updateTranslateY() {
    const images = document.querySelectorAll("#first img");

    images.forEach((img) => {
    img.style.transform = `translateY(${translateYValue}px)`;
    });
}
