import "../scss/main.scss";

const glassCounter = document.querySelector(".glass__counter--js");
const addGlassBtn = document.querySelector(".button--add--js");
const deleteGlassBtn = document.querySelector(".button--delete--js");

let currentGlassCounter = 0;

addGlassBtn.addEventListener("click", () => {
  currentGlassCounter++;
  glassCounter.innerHTML = currentGlassCounter;
});

deleteGlassBtn.addEventListener("click", () => {
  if (currentGlassCounter > 0) {
    currentGlassCounter--;
  }
  glassCounter.innerHTML = currentGlassCounter;
});
