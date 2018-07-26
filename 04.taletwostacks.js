//{[()]}
class queue{
    
    constructor(){
        this.stackLastInFirstOut = [];
        this.stackFirstInFirstOut = [];
    }
    
    enqueue(value){
        this.stackLastInFirstOut.push(value);
    }

    dequeue(){
        this._populateFiFoStack();
        return this.stackFirstInFirstOut.pop();
    }

    peek(){
        this._populateFiFoStack();
        return this.stackFirstInFirstOut[this.stackFirstInFirstOut.length -1];
    }
    
    _populateFiFoStack(){
        if(this.stackFirstInFirstOut.length === 0){
            while(this.stackLastInFirstOut.length > 0){
                this.stackFirstInFirstOut.push(this.stackLastInFirstOut.pop());
            }
        }
    }

    
}

const expressions = [ '1 42', '2', '1 14', '3', '1 28', '3', '1 60', '1 78', '2', '2' ]

const q = new queue();
for(let instruction of expressions){
    let [action, value] = instruction.split(' ');
    if(action === "1"){
        q.enqueue(value);
    } else if(action === "2"){
        q.dequeue();
    } else if (action === "3"){
        console.log(q.peek());
    }
}