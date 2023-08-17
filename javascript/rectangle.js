"use strict";
let length;
let width;
let lengthSelect;
let widthSelect;
let resultSelect;


const circuit = document.getElementById("circuit");
const area = document.getElementById("area");
const diagonal = document.getElementById("diagonal");
const ratio = document.getElementById("ratio")

const lengthAlert = document.querySelector(".length-alert");
const widthAlert = document.querySelector(".width-alert");

const buttonResult = document.querySelector(".calc-button");

const decimalPlace = document.getElementById("decimal-place")


buttonResult.addEventListener("click", () => {
    function rectangle(length, width) {
    length = document.getElementById("length").value;
    width = document.getElementById("width").value;
    lengthSelect = document.getElementById("length-select").value;
    widthSelect = document.getElementById("width-select").value;
    resultSelect = document.getElementById("result-select").value;
        
        if (length.length === 0) {
            lengthAlert.textContent = " Wpisz długość!";
        }
        else if (Number.isNaN(Number(length)) || length < 0) {
            lengthAlert.textContent = " Długość musi być liczbą większą od 0!";
        }
        else {
            lengthAlert.textContent = "";
        }
        if (width.length === 0) {
            widthAlert.textContent = " Wpisz szerokość!";
        }
        else if (Number.isNaN(Number(width)) || width < 0) {
            widthAlert.textContent = " Szerokość musi być liczbą większą od 0!";
        }
        else {
            widthAlert.textContent = "";
        }
        
        switch (lengthSelect) {
            case "mm":
                length = length * 0.1;
                break;
            case "cm":
                length;
                break;
            case "m":
                length = length * 100;
                break;
            case "km":
                length = length * 100000;
                break;
        };
            switch (widthSelect) {
            case "mm":
                width = width * 0.1;
            case "cm":
                width;
                break;
            case "m":
                width = width * 100;
                break;
            case "km":
                width = width * 100000;
                break;
        };
        switch (resultSelect) {
            case "mm":
                length = length * 10;
                width = width * 10;
                break;
            case "cm":
                length;
                width;
                break;
            case "m":
                length = length * 0.01;
                width = width * 0.01;
                break;
            case "km":
                length = length * 0.00001;
                width = width * 0.00001;
                break;
        };

        let decimal = decimalPlace.value

        area.textContent =`${(length * width).toFixed(decimal)} ${resultSelect}2`;
        circuit.textContent = `${(2 * length + 2 * width).toFixed(decimal)} ${resultSelect}`;
        diagonal.textContent = `${(Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2))).toFixed(decimal)} ${resultSelect}`
        ratio.textContent = `${length / length} do ${(width / length).toFixed(decimal)}`
    };
    rectangle()
});



