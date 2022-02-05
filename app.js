//SELECTORS
const btn1 = document.querySelector("#newBtn");
const btn2 = document.querySelector("#easyBtn");
const btn3 = document.querySelector("#hardBtn");
const head = document.querySelector(".head");
const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const infoTxt = document.querySelector(".infoTxt");

h1.addEventListener("click", function () {
  window.location.reload();
});

//FUNCTIONS
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const makeNewDiv = (x) => {
  for (let i = 0; i < x; i++) {
    const newDiv = document.createElement("div");
    const newColor = makeRandColor();
    newDiv.classList.add("square");
    newDiv.style.backgroundColor = newColor;
    container.append(newDiv);
  }
};

const gameChanger = (x) => {
  let i = Math.floor(Math.random() * x);
  const rand = container.children[i].style.backgroundColor;
  h1.innerText = `THE GREAT ${rand.toUpperCase()} COLOR GAME`;
  const square = document.querySelectorAll(".square");
  square.forEach((item) => {
    item.addEventListener("click", function () {
      if (item.style.backgroundColor === rand) {
        infoTxtChange("green");
        btn1.innerText = "PLAY AGAIN?";
        container.style.pointerEvents = "none";
        head.style.backgroundColor = item.style.backgroundColor;
        item.style.visibility = "visible";
        item.style.border = "thick double white";
      } else {
        infoTxtChange("red");
        item.id = "hide";
      }
    });
  });
};

const infoTxtChange = (str) => {
  if (str === "default") {
    infoTxt.innerText = "Guess The Color";
    infoTxt.style.color = "black";
    infoTxt.style.fontWeight = "normal";
  } else if (str === "green") {
    infoTxt.innerText = "Correct!";
    infoTxt.style.color = "green";
    infoTxt.style.fontWeight = "bold";
  } else if (str === "red") {
    infoTxt.innerText = "Try Again!";
    infoTxt.style.color = "red";
    infoTxt.style.fontWeight = "bold";
  }
};

const btnStyle = function (x, y) {
  container.style.pointerEvents = "auto";
  btn1.innerText = "NEW COLORS";
  btn1.style.visibility = "visible";
  x.style.backgroundColor = "blue";
  x.style.color = "white";
  y.style.backgroundColor = "white";
  y.style.color = "black";
};

//BUTTONS
btn1.addEventListener("click", function () {
  if (btn2.style.backgroundColor === "blue") {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    makeNewDiv(3);
    gameChanger(3);
  } else if (btn3.style.backgroundColor === "blue") {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    makeNewDiv(6);
    gameChanger(6);
  } else {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    makeNewDiv(3);
    gameChanger(3);
  }
  container.style.pointerEvents = "auto";
  btn1.innerText = "NEW COLORS";
  infoTxtChange("default");
});

btn2.addEventListener("click", function () {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  makeNewDiv(3);
  gameChanger(3);
  btnStyle(btn2, btn3);
  infoTxtChange("default");
});

btn3.addEventListener("click", function () {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  makeNewDiv(6);
  gameChanger(6);
  btnStyle(btn3, btn2);
  infoTxtChange("default");
});
