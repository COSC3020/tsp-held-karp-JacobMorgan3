const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


let dm = [[]];

assert(tsp_hk(dm) == 0);

dm = [[0]];

assert(tsp_hk(dm) == 0);

dm = [[0,0,0],
      [0,0,0],
      [0,0,0]];

assert(tsp_hk(dm) == 0);

dm = [[0,1,2],
      [1,0,2],
      [2,2,0]];

assert(tsp_hk(dm) == 3);

// https://people.sc.fsu.edu/~jburkardt/datasets/tsp/tsp.html
dm = [[0,3,4,2,7],
      [3,0,4,6,3],
      [4,4,0,5,8],
      [2,6,5,0,6],
      [7,3,8,6,0]];

assert(tsp_hk(dm) == 13);

// Little theory: max(weights) < tsp distance
const n = 4;
let max = 0;
let matrix = [];
for (let i = 0; i < n; ++i) {
    let row = [];
    for (let j = 0; j < n; ++j) {
        if (Math.random() < 0.3) row[j] = Infinity;
        else row[j] = Math.floor(Math.random() * n);
        
        if (i == j) row[j] = 0;
        
        if (row[j] > max || row[j] != Infinity) max = row[j];
    }
    matrix.push(row);
}
 

let dist = tsp_hk(matrix);
assert(dist > max);
