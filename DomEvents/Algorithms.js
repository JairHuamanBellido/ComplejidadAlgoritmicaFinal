export const jumpLineZ = (arrcubes, limit) => {

    var found = null;
    for (let i = 0; i < arrcubes.arr.length; i++) {

        if (arrcubes.arr[i].z >= limit) {

            found = arrcubes.arr[i];
            break;
        }
    }

    return found.z + found.d / 2;
}


export const sortByWidthDepth = (arrcubes) => {

    return arrcubes.arr.sort((a, b) => (a.x * a.z < b.x * b.z) ? 1 : -1)
}