class QueueDataStructure {

    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 100;
    }


    isEmpty() {
        return this.queueControl.length === 0;
    }

    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE;
    }

    enqueue(item) {
        if (!this.canEnqueue()) {
            return 'Queue Overflow';
        }
        this.queueControl.unshift(item);

        return this.queueControl;
    }

    dequeue() {

        if (this.isEmpty()) {
            return 'Queue Underflow';
        }

        let item = this.queueControl[0];

        this.queueControl.shift();

        return item;
    }


}
