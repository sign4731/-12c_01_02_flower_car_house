"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#sun").addEventListener("click", nightMode);
}

function nightMode() {
  console.log("night mode");
  document.querySelector("svg").style.backgroundColor = "darkslateblue";
}
