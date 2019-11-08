import * as THREE from "../build/three.module.js";


export class Cube {

    constructor(w, h, d, color) {
        this.geometry = new THREE.BoxBufferGeometry(w, h, d);
        this.material = new THREE.MeshLambertMaterial({ color: color });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.x = null;
        this.y = null;
        this.z = null;
        this.w = w;
        this.h = h;
        this.d = d;
    }

    setPosition(x, y, z) {
        this.cube.position.x = x;
        this.cube.position.y = y;
        this.cube.position.z = z;

        this.x = x;
        this.y = y;
        this.z = z;

    }

    getModel() {
        return this.cube;
    }
}

