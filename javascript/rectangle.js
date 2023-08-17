"use strict";
let length;
let width;

const circuit = document.getElementById("circuit");
const area = document.getElementById("area");
const diagonal = document.getElementById("diagonal");
const lengthAlert = document.querySelector(".length-alert");
const widthAlert = document.querySelector(".width-alert");

const buttonResult = document.querySelector("button");

buttonResult.addEventListener("click", () => {
    function rectangle(length, width) {
    length = document.getElementById("length").value;
    width = document.getElementById("width").value;
        
        if (length.length === 0 || length == 0) {
            lengthAlert.textContent = " Wpisz długość!";
        }
        else if (Number.isNaN(Number(length))) {
            lengthAlert.textContent = " Długość musi być liczbą!";
        }
        else {
            lengthAlert.textContent = "";
        }
        if (width.length === 0 || width == 0) {
            widthAlert.textContent = " Wpisz szerokość!";
        }
        else if (Number.isNaN(Number(width))) {
            widthAlert.textContent = " Szerokość musi być liczbą!";
        }
        else {
            widthAlert.textContent = "";
        }
        circuit.textContent = 2 * length + 2 * width;
        area.textContent = length * width;
        diagonal.textContent = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2))
    };
    rectangle()
});
