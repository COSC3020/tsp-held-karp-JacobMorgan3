
    function tsp_hk(matrix) {
        let cities = [];
        let storage = [];
        for (let i = 0; i < matrix.length; i++) 
            cities[i] = i;
            
        for (let i = 0; i < (matrix.length + 1) ** 2; ++i) {
            let row = [];
            for (let j = 0; j < matrix.length; ++j)
                row.push(-1);
            storage.push(row);
        }
        
         if (matrix.length <= 1) return 0;
         let min = Infinity;
         for (let i = 0; i < matrix.length; ++i) {
              let tmp = helper(cities, i, matrix, storage);
              if (tmp < min) min = tmp;
         }
         return min;
    }
 
    function helper(cities, start, matrix, storage) {
        // calculating subindex, unique to cities
        let subIndex = 0;
        for (let i = 0; i < cities.length; ++i)
            subIndex |= 1 << cities[i];
    
        // check if we have memorized the value for cities, start
        if (storage[subIndex] != -1) {
            if (storage[subIndex][start] != -1) {
                // console.log("Using Memory");
                return storage[subIndex][start];
            }
        }
        
        // console.log("Cities: " + cities + " Start: " + start);
    
        // base case, we are only looking at two cities
        if (cities.length == 2) {
            let tmp;
            
            if (cities[0] == start) tmp = matrix[start][cities[1]];
            else tmp = matrix[start][cities[0]]
            
            storage[subIndex][start] = tmp;
            return tmp;
        }
    
        // find the min path through cities
        let min = Infinity;
        for (let i = 0; i < cities.length; i++) {
            if (cities[i] == start) continue;
            let tmpArr = cities.slice();
            let tmp = helper((tmpArr.slice(0, cities.indexOf(start))).concat(tmpArr.splice(cities.indexOf(start) +1)), cities[i], matrix, storage) + matrix[start][cities[i]];
            if (tmp < min) 
                min = tmp; 
        }
    
        //update memorization and return
        storage[subIndex][start] = min;
        return min;
    }

module.exports = [tsp_hk, helper];
