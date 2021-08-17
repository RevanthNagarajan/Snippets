let Logger = function (id) { // arrow functions donot have construct
    this.id = id
    this.start = (msg) => {
        console.log(this.id+" started at "+new Date().getTime()+" : "+msg)
    }
    this.end = (msg) => {
        console.log(this.id+" ended at "+new Date().getTime()+" : "+msg)
    }
    //return { start : this.start, end : this.end }  //returning objects will affect the prototype of the functions object
};
Logger.prototype.reality = function() { // arrow function prototypes cannot be extended
    console.log("Reality is Misery");
  };

let x = [...Array(1000).keys()];
let log = new Logger("pid1");
log.start("array repeated assignment");
let z; x.forEach(y=> z = y);
log.end("array repeated assignment");
log.reality()
log.__proto__.reality()
let b ={};
b.__proto__.brutality = () => { console.log("Brutality Wins")};
let u = []
u.__proto__.brutality()