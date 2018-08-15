const uniqEs6 = (arrArg) => arrArg.filter((elem, pos, arr) => arr.indexOf(elem) == pos);

/**
 * JSPERF
 * https://jsperf.com/sparse-arrays-js
 */

/**
 * In this versión I tried to reduce the number of times the filter had to loop.
 * 
 * It's the fastest of the versions I did
 * but it didn't pass all the test cases, 
 * the reason: there were duplicated queries that I wasn't aware of.
 */
function matchingStrings0(strings, queries) {
    let _strings = [...strings];
    return queries.map((query, index)=>{
        const originalCount = _strings.length;
        _strings = _strings.filter((string)=>{
            return query !== string;
        });            
        
        return originalCount - _strings.length;
    })
}

/**
 * This version passes all test cases but it's a O(nm)
 */
function matchingStrings1(strings, queries) {    
    let matchesCount = 0;
    return queries.map((query, index)=>{
        matchesCount = strings.filter((string)=>{
            return query === string;
        }).length;
        
        return matchesCount;
    })
}

/**
 * This last version was the best version since
 * is faster than the matchingStrings1 version
 * and passes all test cases
 */
function matchingStrings2(strings, queries) {    
    const dict = {};
    let matchesCount = 0;
    return queries.map((query, index)=>{        
        if(!dict[query]){
            matchesCount = strings.filter((string)=>{
                return query === string;
            }).length;        
            dict[query] = matchesCount;
        }        
        return dict[query];
    })
}

const strings = ["lekgdisnsbfdzpqlkg",
"eagemhdygyv",
"jwvwwnrhuai",
"urcadmrwlqe",
"mpgqsvxrijpombyv",
"mpgqsvxrijpombyv",
"urcadmrwlqe",
"mpgqsvxrijpombyv",
"eagemhdygyv",
"eagemhdygyv",
"jwvwwnrhuai",
"urcadmrwlqe",
"jwvwwnrhuai",
"kvugevicpsdf",
"kvugevicpsdf",
"mpgqsvxrijpombyv",
"urcadmrwlqe",
"mpgqsvxrijpombyv",
"exdafbnobg",
"qhootohpnfvbl",
"suffrbmqgnln",
"exdafbnobg",
"exdafbnobg",
"eagemhdygyv",
"mpgqsvxrijpombyv",
"urcadmrwlqe",
"jwvwwnrhuai",
"lekgdisnsbfdzpqlkg",
"mpgqsvxrijpombyv",
"lekgdisnsbfdzpqlkg",
"jwvwwnrhuai",
"exdafbnobg",
"mpgqsvxrijpombyv",
"kvugevicpsdf",
"qhootohpnfvbl",
"urcadmrwlqe",
"kvugevicpsdf",
"mpgqsvxrijpombyv",
"lekgdisnsbfdzpqlkg",
"mpgqsvxrijpombyv",
"kvugevicpsdf",
"qhootohpnfvbl",
"lxyqetmgdbmh",
"urcadmrwlqe",
"urcadmrwlqe",
"kvugevicpsdf",
"lxyqetmgdbmh",
"urcadmrwlqe",
"lxyqetmgdbmh",
"jwvwwnrhuai",
"qhootohpnfvbl",
"qhootohpnfvbl",
"jwvwwnrhuai",
"lekgdisnsbfdzpqlkg",
"kvugevicpsdf",
"mpgqsvxrijpombyv",
"exdafbnobg",
"kvugevicpsdf",
"lekgdisnsbfdzpqlkg",
"qhootohpnfvbl",
"exdafbnobg",
"qhootohpnfvbl",
"exdafbnobg",
"mpgqsvxrijpombyv",
"suffrbmqgnln",
"mpgqsvxrijpombyv",
"qhootohpnfvbl",
"jwvwwnrhuai",
"mpgqsvxrijpombyv",
"qhootohpnfvbl",
"lekgdisnsbfdzpqlkg",
"eagemhdygyv",
"jwvwwnrhuai",
"kvugevicpsdf",
"eagemhdygyv",
"eagemhdygyv",
"lxyqetmgdbmh",
"qhootohpnfvbl",
"lxyqetmgdbmh",
"exdafbnobg",
"qhootohpnfvbl",
"qhootohpnfvbl",
"exdafbnobg",
"suffrbmqgnln",
"mpgqsvxrijpombyv",
"urcadmrwlqe",
"eagemhdygyv",
"lxyqetmgdbmh",
"urcadmrwlqe",
"suffrbmqgnln",
"qhootohpnfvbl",
"kvugevicpsdf",
"lekgdisnsbfdzpqlkg",
"lxyqetmgdbmh",
"mpgqsvxrijpombyv",
"jwvwwnrhuai",
"lxyqetmgdbmh",
"lxyqetmgdbmh",
"lekgdisnsbfdzpqlkg",
"qhootohpnfvbl"];
const queries = ["exdafbnobg",
"eagemhdygyv",
"mpgqsvxrijpombyv",
"kvugevicpsdf",
"lekgdisnsbfdzpqlkg",
"kvugevicpsdf",
"exdafbnobg",
"qhootohpnfvbl",
"eagemhdygyv",
"kvugevicpsdf",
"suffrbmqgnln",
"jwvwwnrhuai",
"lekgdisnsbfdzpqlkg",
"lekgdisnsbfdzpqlkg",
"mpgqsvxrijpombyv",
"jwvwwnrhuai",
"kvugevicpsdf",
"lekgdisnsbfdzpqlkg",
"exdafbnobg",
"suffrbmqgnln",
"qhootohpnfvbl",
"eagemhdygyv",
"exdafbnobg",
"suffrbmqgnln",
"jwvwwnrhuai",
"qhootohpnfvbl",
"eagemhdygyv",
"exdafbnobg",
"exdafbnobg",
"jwvwwnrhuai",
"qhootohpnfvbl",
"lxyqetmgdbmh",
"qhootohpnfvbl",
"suffrbmqgnln",
"lxyqetmgdbmh",
"qhootohpnfvbl",
"eagemhdygyv",
"jwvwwnrhuai",
"eagemhdygyv",
"qhootohpnfvbl",
"mpgqsvxrijpombyv",
"qhootohpnfvbl",
"jwvwwnrhuai",
"exdafbnobg",
"eagemhdygyv",
"eagemhdygyv",
"kvugevicpsdf",
"kvugevicpsdf",
"jwvwwnrhuai",
"urcadmrwlqe",
"lxyqetmgdbmh",
"qhootohpnfvbl",
"exdafbnobg",
"exdafbnobg",
"eagemhdygyv",
"qhootohpnfvbl",
"exdafbnobg",
"exdafbnobg",
"lekgdisnsbfdzpqlkg",
"jwvwwnrhuai",
"eagemhdygyv",
"urcadmrwlqe",
"kvugevicpsdf",
"lekgdisnsbfdzpqlkg",
"jwvwwnrhuai",
"eagemhdygyv",
"lekgdisnsbfdzpqlkg",
"exdafbnobg",
"kvugevicpsdf",
"jwvwwnrhuai",
"exdafbnobg",
"lxyqetmgdbmh",
"exdafbnobg",
"lxyqetmgdbmh",
"jwvwwnrhuai",
"mpgqsvxrijpombyv",
"eagemhdygyv",
"urcadmrwlqe",
"kvugevicpsdf",
"qhootohpnfvbl",
"jwvwwnrhuai",
"eagemhdygyv",
"urcadmrwlqe",
"urcadmrwlqe",
"exdafbnobg",
"qhootohpnfvbl",
"exdafbnobg",
"eagemhdygyv",
"exdafbnobg",
"jwvwwnrhuai",
"eagemhdygyv",
"jwvwwnrhuai",
"mpgqsvxrijpombyv",
"urcadmrwlqe",
"urcadmrwlqe",
"eagemhdygyv",
"eagemhdygyv",
"jwvwwnrhuai",
"suffrbmqgnln",
"eagemhdygyv"];

const res = matchingStrings2(strings, queries);

const formatted = res.join("\n");
console.log(formatted)