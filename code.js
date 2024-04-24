function tsp_hk(cities, start, distance_matrix,) {
    if (cities.length == 2) {
        return distance_matrix[start][!start];
    }
    let min = Infinity;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] == start) 
            continue;
        let tmp = tsp_hk(cities.splice(cities.indexOf(start),1), cities[i]) + distance_matrix[start][cities[i]];
        if (tmp < min) 
            min = tmp; 
    }
    return min;
}

// Converts a subset of our cities into an index that can be used for memorization
//      Returns an index (unique to the subset) between 0 and 2^{arr.length}
function subIndex(arr) {
    let n = 0;
    for (let i = 0; i < arr.length; ++i)
        n |= 1 << arr[i];
    return n;
}


let start = 0;

let cities = [0,1,2,3,4];

let distance_matrix = [  [0,9,0,18,6],
                         [9,0,6,0,5],
                         [0,6,0,0,7],
                         [18,0,0,0,15],
                         [6,5,7,15,0]  ];
                         
// console.log(tsp_hk(cities, start, distance_matrix));
console.log(subIndex([0,1, 4]));
