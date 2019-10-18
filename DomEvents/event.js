import escena from "../Figuras/Scene.js";
import { Cube } from "../Figuras/Cube.js";

let color_picker_wrapper = document.getElementById("color-picker-wrapper");
let bottomContainer = document.getElementById("addCube-container");
let btn_open = document.getElementById("btn-open");
let btn_close = document.getElementById("btn-close");
let w = document.getElementById("field-w");
let h = document.getElementById("field-h");
let d = document.getElementById("field-d");
let color = document.getElementById('color-id');
let containerForm = document.getElementById("content-cubeContainer");
let btn_submit = document.getElementById("btn-submit");
window.onload = () => {
    h.value = "";
    w.value = "";
    d.value = "";
    
}

let startX = 0;
let startY = 0;

color.onchange = function() {
	color_picker_wrapper.style.backgroundColor = color.value;    
}
color_picker_wrapper.style.backgroundColor = color.value;



document.getElementById('btn-open').addEventListener('click', () => {

    btn_open.style.display = "none";
    btn_close.style.display = "initial";
    bottomContainer.style.height = "500px";
    containerForm.style.display = "flex";

})


document.getElementById("btn-close").addEventListener("click", (e) => {
    btn_close.style.display = "none";
    btn_open.style.display = "initial";
    bottomContainer.style.height = "100px";
    containerForm.style.display = "none";


})


document.getElementById("btn-submit").addEventListener("click", () => {
    console.log(color.value);
    const w_val = parseInt(w.value);
    const h_val = parseInt(h.value);
    const d_val = parseInt(d.value);

    startX =  startX + (w_val/2);
    let newcube = new Cube(w_val, h_val, d_val, color.value);
    newcube.setPosition(startX, h_val/2, 0);

    escena.add(newcube.getModel());


  
    w.value = "";
    h.value = "";
    d.value = "";
    startX+=w_val;

})
