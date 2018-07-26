function rotLeft(a, d) {
    if(a.length <2 ) {
        return a.slice(0); 
    }

    let times = d % a.length;
    if(times === 0) {
        return a.slice(0); 
    }
    
    let secondSlice = a.slice(times);
    let firstSlice = a.slice(0, times);
    return secondSlice.concat(firstSlice);  
}

const testCase = [1, 2, 3, 4, 5]
const d = 4;

const result = rotLeft(testCase, d);
console.log(result);