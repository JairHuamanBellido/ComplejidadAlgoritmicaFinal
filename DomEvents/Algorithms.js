export const jumpLineZ = (arrcubes, limit, lasCubeTracked) => {


   
        
        var found = lasCubeTracked.d / 2 + lasCubeTracked.z;
    
        console.log(lasCubeTracked.z);
        // for (let i = 0; i < arrcubes.length; ++i) {
    
    
    
        //     if (found < arrcubes[i].z + (lasCubeTracked / 2)) {
        //         found = arrcubes[i].z + (arrcubes[i].d / 2)
        //         break;
    
        //     }
        // }
    
    
    
    
        for (let i = 0; i < arrcubes.length; ++i) {
    
            if (lasCubeTracked.z < arrcubes[i].z) {
                console.log(arrcubes[i]);
                found = arrcubes[i].z + arrcubes[i].d / 2
                break;
            }
    
    
        }
        return found;
 








}

export const jumpLineX = (arrcubes, lastCubeTracked) => {

    // (x: 9, z:9)

    let z = lastCubeTracked.z;
    let x = lastCubeTracked.x;
    let found = 0;

    console.log(z);
    for (let i = 0; i < arrcubes.length; ++i) {
        if (z < arrcubes[i].z) {
            found = arrcubes[i].x + (arrcubes[i].w / 2)
        }
    }

    console.log(found);
    return found;
}


export const sortByWidthDepth = (arrcubes) => {

    return arrcubes.arr.sort((a, b) => (a.x * a.z < b.x * b.z) ? 1 : -1)
}


export const findSpaceUpLevel = (arrcubes, trackedCube) => {

    let newHeight = trackedCube.y + (trackedCube.h / 2);

    console.log(newHeight);
    for (let i = 0; i < arrcubes.length; ++i) {
        if (newHeight < arrcubes[i].y + (trackedCube.h / 2)) {
            console.log(arrcubes[i]);
            newHeight = arrcubes[i].y + (arrcubes[i].h / 2);
            console.log("Valor de nueva altura es : " + newHeight);
            break;
        }
    }



    return newHeight;
}