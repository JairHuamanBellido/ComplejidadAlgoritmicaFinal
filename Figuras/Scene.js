import * as THREE from "../build/three.module.js";

class Scene{
    constructor(){
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('#afbfcd')

    }


    getModel(){
        return this.scene;
    }

}



let escena =  new Scene();
export default escena.getModel();