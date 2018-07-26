let a = 'fcrxzwscanmligyxyvym';
let b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
function makeAnagram(a, b) { 
    
    const hash = {};   
    let counter = 0;
    
    for(let letter of a.split('')){
        hash[letter] = hash[letter] ? hash[letter]+1 : 1
    }
  
    for(let letter of b.split('')){
        hash[letter] = hash[letter]? hash[letter]-1 : -1
    }
    
    for(let c in hash){
        counter += Math.abs(hash[c])
    }
    
    return counter;
}


const s = makeAnagram(a,b)
console.log(s)