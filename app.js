document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");

  // function to generate random hex code
  function randHex() {
    let hexCode = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  for (let i = 0; i < 9; i++) {
      const square = document.createElement("div");
      square.setAttribute('class', 'square');
      square.style.backgroundColor = randHex();
    main.appendChild(square);
  }
});
