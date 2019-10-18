import * as THREE from "../build/three.module.js";


export class Ground{
    constructor(w,h,d,color){
        this.geometry =  new THREE.BoxBufferGeometry(w,h,d);
        this.material =  new THREE.MeshLambertMaterial({color:color});
        this.ground =  new THREE.Mesh(this.geometry,this.material);
    }

    setPosition(y){
        this.ground.position.y = y;
    }

    getModel(){
        return this.ground;
    }

    
}