/*
Modified JavaScript project from freeCodeCamp.org
*/

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexColor = document.getElementById("color").value;
  
    //console.log(hexColor);

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

