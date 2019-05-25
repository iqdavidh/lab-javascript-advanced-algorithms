class StackDataStructure {

    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 100;
    }

    isEmpty() {
        return this.stackControl.length === 0;
    }

    canPush() {
        return this.stackControl.length < this.MAX_SIZE;
    }

    push(item) {

        if (!this.canPush()) {
            return 'Stack Overflow';
            0
        }
        this.stackControl.push(item);
        return this.stackControl;
    }

    pop() {

        if (this.isEmpty()) {
            return 'Stack Underflow';
        }

        let item = this.stackControl[this.stackControl.length - 1];

        this.stackControl.splice( this.stackControl.length-1,1);

        return item;
    }
}
