class Heap {

    constructor() {
        /** Current array length **/
        this.capacity = 10;
        /** Current number of elements in Heap **/
        this.size = 0;
        /** Array of Heap elements **/
        this.items = [];
    }
    
    /** @param parentIndex The index of the parent element.
        @return The index of the left child.
    **/
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    
    /** @param parentIndex The index of the parent element.
        @return The index of the right child.
    **/
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    
    /** @param childIndex The index of the child element.
        @return The index of the parent element.
    **/
    getParentIndex(childIndex) {
        return parseInt((childIndex - 1) / 2);
    }
    
    /** @param index The index of the element you are checking.
        @return true if the Heap contains enough elements to fill the left child index, 
                false otherwise.
    **/
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.size;
    }
    
    /** @param index The index of the element you are checking.
        @return true if the Heap contains enough elements to fill the right child index, 
                false otherwise.
    **/
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.size;
    }
    
    /** @param index The index of the element you are checking.
        @return true if the calculated parent index exists within array bounds
                false otherwise.
    **/
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    
    /** @param index The index of the element whose child you want.
        @return the value in the left child.
    **/
    leftChild(index) {
        return this.items[this.getLeftChildIndex(index)];
    }
    
    /** @param index The index of the element whose child you want.
        @return the value in the right child.
    **/
    rightChild(index) {
        return this.items[this.getRightChildIndex(index)];
    }
    
    /** @param index The index of the element you are checking.
        @return the value in the parent element.
    **/
    parent(index) {
        return this.items[this.getParentIndex(index)];
    }
    
    /** @param indexOne The first index for the pair of elements being swapped.
        @param indexTwo The second index for the pair of elements being swapped.
    **/
    swap(indexOne, indexTwo) {
        let temp = this.items[indexOne];
        this.items[indexOne] = this.items[indexTwo];
        this.items[indexTwo] = temp;
    }    
    
    /** @throws IllegalStateException if Heap is empty.
        @return The value at the top of the Heap.
     **/
    peek() {
        this.isEmpty("peek");
        
        return items[0];
    }
    
    /** @throws IllegalStateException if Heap is empty. **/
    isEmpty(methodName) {
        if(this.size == 0) {
            throw new Error(
                "You cannot perform '" + methodName + "' on an empty Heap."
            );
        }
    }
    
    /** Extracts root element from Heap.
        @throws IllegalStateException if Heap is empty.
    **/
    poll() {
        // Throws an exception if empty.
        this.isEmpty("poll");
        
        // Else, not empty
        let item = this.items[0];
        this.items[0] = this.items[this.size - 1];
        this.size--;
        this.heapifyDown();
        return item;
    }
    
    /** @param item The value to be inserted into the Heap. **/
    add(item) {
        // Resize underlying array if it's not large enough for insertion
        //ensureCapacity();
        
        // Insert value at the next open location in heap
        this.items.push(item);
        this.size++;
        
        // Correct order property
        this.heapifyUp();

    }
    
    /** Swap values down the Heap. **/
    heapifyDown() {
        throw Error('Not implemented');
    }
    
    /** Swap values up the Heap. **/
    heapifyUp() {
        throw Error('Not implemented');
    }
}

class MaxHeap extends Heap {

    constructor(){
        super();
    }
    /** Swap values down the Heap. **/
    heapifyDown() {
        let index = 0;
        while(this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            
            if(    this.hasRightChild(index) 
                && this.rightChild(index) > this.leftChild(index)
            ) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            
            if(this.items[index] > this.items[smallerChildIndex]) {
                break;
            }
            else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
        //console.log('down', this.items)
    }
    
    /** Swap values up the Heap. **/
    heapifyUp() {
        let index = this.size - 1;
        
        while( this.hasParent(index) && this.parent(index) < this.items[index] 
            ) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
}

class MinHeap extends Heap {

    constructor(){
        super();
    }
    /** Swap values down the Heap. **/
    heapifyDown() {
        let index = 0;
        while(this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            
            if(    this.hasRightChild(index) 
                && this.rightChild(index) < this.leftChild(index)
            ) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            
            if(this.items[index] < this.items[smallerChildIndex]) {
                break;
            }
            else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
    
    /** Swap values up the Heap. **/
    heapifyUp() {
        let index = this.size - 1;
        
        while(    this.hasParent(index)
             &&   this.parent(index) > this.items[index] 
            ) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
}

let minheap = new MinHeap();
let maxheap = new MaxHeap();

let data = [81, 34, 42, 43, 10, 66];


data.forEach(value => {
    minheap.add(value);
    maxheap.add(value);
});

data.forEach((val)=>console.log('poll min', minheap.poll(), 'poll max', maxheap.poll()))