import * as THREE from "../build/three.module.js";
export class ContainerCube{
    constructor(w,h,d,color){
        this.geometry =  new THREE.BoxGeometry(w,h,d);
        this.material =  new THREE.MeshBasicMaterial({color:color,wireframe:true})
        this.container =  new THREE.Mesh(this.geometry,this.material);
    }

    setPosition(x,y,z){
        this.container.position.x = x;
        this.container.position.y = y;
        this.container.position.z = z;
    }

    getModel(){
        return this.container;
    }
}