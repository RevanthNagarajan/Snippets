const { json } = require("body-parser");

let mesmerize = (()=>{
    var ben = "10"; //Closured
    return {
        name : (text) =>  text+", Ben "+ben ,
        number : (text) => `${text} have ${ben} aliens to choose from`
    }
})(); //IIFE

console.log(mesmerize.name("Hey")); // Hey, Ben 10
console.log(mesmerize.number("You")); // You have 10 aliens to choose from

let supplyObject = { name : "Revy", townhall : "13", league : "Champion" };
var functionInvoke;
function bindWay (smiley) {
    return `${this.name} has a village with townhall level ${this.townhall}. He is in the league of ${this.league} ${smiley} ${smiley} ${smiley}`;
}
functionInvoke = bindWay.bind(supplyObject,"🔥");
console.log("Bind",functionInvoke()); //Bind Revy has a village with townhall level 13. He is in the league of Champion 🔥 🔥 🔥

functionInvoke = bindWay.call(supplyObject,"🔥");
console.log("Apply",functionInvoke); //Bind Revy has a village with townhall level 13. He is in the league of Champion 🔥 🔥 🔥

functionInvoke = bindWay.apply(supplyObject,["🔥"]);
console.log("Apply",functionInvoke); //Bind Revy has a village with townhall level 13. He is in the league of Champion 🔥 🔥 🔥

