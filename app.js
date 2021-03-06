document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");
  const buttonColor = document.querySelector("#genColor");
  const buttonCircles = document.querySelector("#changeCircles");
  const buttonSquares = document.querySelector("#changeSquares");
  const genBoxes = document.querySelector("#genGrid");
  const numBoxes = 100;
  const animateSquares = document.querySelector("#animateColor");
  const stopAnimation = document.querySelector("#stopAnimation");
  let interval;

  // function to generate random hex code
  function randHex() {
    let hexCode = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //For loop to create 25 boxes once every 75ms
  function generateBoxes() {
    for (let i = 0; i < numBoxes; i++) {
      setTimeout(() => {
        generateBox(i);
      }, 25 * i);
    }
  }
  //generates squar element
  function generateBox(i) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("id", i);
    square.style.width = "50px";
    square.style.height = "50px";
    square.style.backgroundColor = randHex();
    main.appendChild(square);
  }
  //Button to generate the grid
  genBoxes.addEventListener("click", () => {
    generateBoxes();
    genBoxes.disabled = "true";
  });

  //Button to change the color of all squares
  buttonColor.addEventListener("click", () => {
    for (let i = 0; i < numBoxes; i++) {
      square = document.getElementById(i);
      square.style.backgroundColor = randHex();
    }
  });
  //Button to change the shape to circles
  buttonCircles.addEventListener("click", () => {
    for (let i = 0; i < numBoxes; i++) {
      square = document.getElementById(i);
      square.style.borderRadius = "50%";
    }
  });
  //Button to change back to squares
  buttonSquares.addEventListener("click", () => {
    for (let i = 0; i < numBoxes; i++) {
      square = document.getElementById(i);
      square.style.borderRadius = "0";
    }
  });

  //function to change color of boxes
  function changeColor(i) {
    square = document.getElementById(i);
    square.style.backgroundColor = randHex();
  }

  animateSquares.addEventListener("click", () => {
    interval = setInterval(change, 250);
    function change() {
      for (let i = 0; i < numBoxes; i++) {
        changeColor(i);
      }
    }
    stopAnimation.addEventListener("click", () => {
      window.location.reload();
    });
  });
});
