class tsp{
     constructor(distance_matrix, start) { //constructor
        this.matrix = distance_matrix;
        this.start = start;
        this.storage = [];
        
        this.cities = [];
        for (let i = 0; i < this.matrix.length; ++i)
            this.cities.push(i);
            this.storage.push([]);
     }
     
    tsp_hk() {
        return this.helper(this.cities, this.start);
    }
 
    helper(cities, start) {
        console.log(cities, start);
        
        // calculating subindex, unique to cities
        let subIndex = 0;
        for (let i = 0; i < cities.length; ++i)
            subIndex |= 1 << cities[i];
    
        // check if we have memorized the value for cities, start
        if (this.storage[subIndex] != undefined) {
            if (this.storage[subIndex][start] != undefined) 
                return this.storage[subIndex][start];
        }
    
        // base case, we are only looking at two cities
        if (cities.length == 2) {
            if (cities[0] == start)
                return this.matrix[start][cities[1]]; 
            else
                return this.matrix[start][cities[0]]; 
        }
    
        // find the min path through cities
        let min = Infinity;
        for (let i = 0; i < cities.length; i++) {
            if (cities[i] == start) continue;
            let tmpArr = cities.slice();
            let tmp = this.helper(tmpArr.splice(cities.indexOf(start) +1), cities[i]) + this.matrix[start][cities[i]];
            if (tmp < min) 
                min = tmp; 
        }
    
        //update memorization and return
        this.storage[subIndex] = [];
        this.storage[subIndex][start] = min;
        return min;
    }
}

module.exports.class = tsp;
