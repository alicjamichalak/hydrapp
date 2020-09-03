import "../scss/main.scss";

const glassCounter = document.querySelector(".glass__counter--js");
const addGlassBtn = document.querySelector(".button--add--js");
const deleteGlassBtn = document.querySelector(".button--delete--js");
const key = new Date().toLocaleString().slice(0, 10);

let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if(localStorageValue){
  currentGlassCounter = localStorageValue;
}else{
  localStorage.setItem(key,0);
}

glassCounter.innerHTML = currentGlassCounter;

addGlassBtn.addEventListener("click", () => {
  currentGlassCounter++;
  glassCounter.innerHTML = currentGlassCounter;
  localStorage.setItem(key,currentGlassCounter);
});

deleteGlassBtn.addEventListener("click", () => {
  if (currentGlassCounter > 0) {
    currentGlassCounter--;
  }
  glassCounter.innerHTML = currentGlassCounter;
  localStorage.setItem(key,currentGlassCounter);
});
