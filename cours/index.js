"use strict";

//CANVAS
//------------

// function draw() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");

//   ctx.fillStyle = "rgb(200, 0, 0)";
//   ctx.fillRect(50, 50, 50, 150);

//   ctx.fillStyle = "rgba(0, 100, 200, 0.5)";
//   ctx.fillRect(100, 30, 100, 50);

//   ctx.fillStyle = "rgba(100, 100, 200, 0.5)";
//   ctx.fillRect(10, 25, 100, 100);

//   ctx.clearRect(15, 25, 40, 40);

//   ctx.strokeRect(125, 75, 50, 50);

//   ctx.beginPath();
//   ctx.moveTo(180, 150);
//   ctx.lineTo(100, 75);
//   ctx.lineTo(100, 150);
//   ctx.fill();
// }

// window.addEventListener("load", draw);

//-----------------
// TRY / CATCH
//------------------

try {
  //Test un bloc de code
  maFonction();
} catch (err) {
  // console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}
//console.log(isValidJSON("hbjbjjh"));

// FINALLY

try {
  //Test un bloc de code
  maFonction();
} catch (err) {
  console.log(err);
} finally {
  console.log("On est arrivé au bout");
}

// Throw
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a number !";
  } else {
    console.log("C'est un nombre");
  }
  // PLEIN DE CODE
}
try {
  isNumber("2d");
} catch (err) {
  console.log(err);
}

//-----------------------
// Strict mode
//-----------------------
//---> Déclaration "use strict" en début de page

voiture = "Toyota";
console.log(voiture);
