function checkMagazine(magazine, note) {
    const hash = {};
    
    for(let word of magazine){
        hash[word] = hash[word] ? hash[word]+1 : 1;
    }
    
    for(let word of note){
        if(hash[word] > 0){
            hash[word]-= 1;
        } else {
            return false;
        }
    }
    return true;
}

const magazine = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
const note = ['ive', 'got', 'some', 'coconuts'];
const isReplicable = checkMagazine(magazine, note);
console.log(isReplicable ? 'Yes' : 'No');