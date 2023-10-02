let cache = {
    "ritual" : "RITUAL",
    "obese" : "OBESE"
};

function checkCache (param) {
    if(cache[param]) return cache[param];
    else return null;
}

function callerFunction (callback,...params) {
    return ()=> callback(...params);
}


let x = callerFunction(checkCache,"ritual","obese");

console.log(x());