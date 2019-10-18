let bottomContainer =  document.getElementById("addCube-container");
let btn_open =  document.getElementById("btn-open");
let btn_close =  document.getElementById("btn-close");

let containerForm =  document.getElementById("content-cubeContainer");

function show(e){

    

    e.style.display="none"
    btn_close.style.display="initial";
    bottomContainer.style.height = "300px";
    containerForm.style.display="flex";

}
function closeContainer(e){
    console.log("as");
    e.style.display="none";
    btn_open.style.display="initial";
    bottomContainer.style.height="100px";
    containerForm.style.display="none";
}