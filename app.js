document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");
  const button = document.querySelector("#genColor");

  // function to generate random hex code
  function randHex() {
    let hexCode = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //For loop to create 9 boxes
  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("id", i);
    square.style.width = "50px";
    square.style.heigh = "50px";
    square.style.backgroundColor = randHex();
    main.appendChild(square);
  }

  button.addEventListener("click", () => {
      for (let i = 0; i < 9; i++) {
          square = document.getElementById(i);
          square.style.backgroundColor = randHex();
      }
  });
});
