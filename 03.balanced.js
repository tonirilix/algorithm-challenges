//{[()]}
function isBalanced(expression){
    const array = expression.split('');
    const stack = [];
    const dictionary = {
        '{': '}',
        '[': ']',
        '(': ')'
    }; 

    for(let c of array){
        if(dictionary[c]){
            stack.push(dictionary[c])
        } else {
            let isEmpty = stack.length === 0;
            const matchesTop = c === stack.pop();
            if(isEmpty || !matchesTop){
                return false;
            }
        }        
    }
    let isEmpty = stack.length === 0;
    return isEmpty;
}

const testCase = '{[()]}[]';
const result = isBalanced(testCase);
console.log(result);