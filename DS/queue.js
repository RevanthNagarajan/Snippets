class queue {
    constructor () {
        this.queue = [];
    }

    enqueue = (name,age,id,tech) => {
        let toBeEnqueued = {
            name : name, age : age, id : id, tech : tech
        };
        this.queue.push(toBeEnqueued);
        return toBeEnqueued;
    };

    dequeue = () => {
        let toBeDequeued = this.queue[0];
        this.queue.splice(0,1);
        return toBeDequeued;
    };

    isEmpty = () => {
        return this.queue.length ? false : true;
    };

    rear = () => {
        return this.queue[this.queue.length-1];
    };

    front = () => {
        return this.queue[0];
    };

    size = () => {
        return this.queue.length;
    }

    all = () => {
        return this.queue;
    }
    clearAll = () => {
        this.queue = [];
        return this.queue;
    };

    findByParam = (type,val) => {
        let result;
        if(type==='name' || type==='id'){
            result = this.queue[this.queue.findIndex(obj => obj[type] === val)];
        } else {
            result = "Can find only by name or id";
        }
        return result;
    };

    searchBySkills = (tech) => {
        let result = [];
        result = this.queue.filter((val)=>{
            return val.tech==='JS';
        });
        return result;
    };
};

let opQueue = new queue;
console.log("Created Queue");
console.log("Enqueue Revanth",opQueue.enqueue('Revanth',24,'X10001','JS'));
console.log("Enqueue Saravana",opQueue.enqueue('Saravana',26,'X10002','DO'));
console.log("Enqueue Shan",opQueue.enqueue('Shan',35,'X10003','SQL'));

console.log("queue front",opQueue.front());
console.log("queue rear",opQueue.rear());
console.log("isEmpty",opQueue.isEmpty());

console.log("finding Shan by name",opQueue.findByParam('name','Shan'));
console.log("finding by id",opQueue.findByParam('id','X10002'));
console.log("finding by JS tech",opQueue.searchBySkills('JS'));
console.log("finding size",opQueue.size());

console.log("finding all",opQueue.all());

console.log("Dequeue",opQueue.dequeue());

console.log("finding all",opQueue.all());

console.log("clearing all",opQueue.clearAll());

console.log("finding all",opQueue.all());

console.log("isEmpty",opQueue.isEmpty());