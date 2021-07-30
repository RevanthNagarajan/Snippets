class stack {
    top = null;
    constructor () {
        this.stack = [];
    }
    push = (name,age,id,tech) => {
        let toBePushed = {
            name : name, age : age, id : id, tech : tech
        };
        this.stack.push(toBePushed);
        return toBePushed;
    };
    pop = () => {
        let toBePopped = this.stack[this.stack.length-1];
        this.stack.splice(this.stack.length-1,1);
        return toBePopped;
    };
    length = () =>{
        return this.stack.length;
    };
    all = () => {
        return this.stack;
    };
    clearAll = () => {
        this.stack = [];
        return this.stack;
    };
    findByParam = (type,val) => {
        let result;
        if(type==='name' || type==='id'){
            result = this.stack[this.stack.findIndex(obj => obj[type] === val)];
        } else {
            result = "Can find only by name or id";
        }
        return result;
    };
    searchBySkills = (tech) => {
        let result = [];
        result = this.stack.filter((val)=>{
            return val.tech==='JS';
        });
        return result;
    };
}

let opStack = new stack;
console.log("Created Stack");
console.log("Pushing Revanth",opStack.push('Revanth',24,'X10001','JS'));
console.log("Pushing Saravana",opStack.push('Saravana',26,'X10002','DO'));
console.log("Pushing Shan",opStack.push('Shan',35,'X10003','SQL'));

console.log("finding Shan by name",opStack.findByParam('name','Shan'));
console.log("finding by id",opStack.findByParam('id','X10002'));
console.log("finding by JS tech",opStack.searchBySkills('JS'));
console.log("finding length",opStack.length());

console.log("finding all",opStack.all());

console.log("pop",opStack.pop());

console.log("finding all",opStack.all());

console.log("clearing all",opStack.clearAll());

console.log("finding all",opStack.all());