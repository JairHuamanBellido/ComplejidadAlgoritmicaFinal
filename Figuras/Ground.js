import * as THREE from "../build/three.module.js";


export class Ground{
    constructor(w,h,color){
        this.geometry =  new THREE.PlaneBufferGeometry(w,h);
        this.material =  new THREE.MeshLambertMaterial({color:color});
        this.material.color.setHSL( 0.095, 1, 0.75 );
        this.ground =  new THREE.Mesh(this.geometry,this.material);
        this.ground.receiveShadow = true;
        this.ground.rotation.x = - Math.PI / 2;
    }

    setPosition(y){
        this.ground.position.y = y;
    }

    getModel(){
        return this.ground;
    }

    
}