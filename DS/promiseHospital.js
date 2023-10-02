console.log('Patient1:admitted');
console.log('Patient2:admitted');
console.log('Patient3:Suicide attempt');


const FriendsBringFIR = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('FIR');
    },3000);
});

const CheckingIfAlive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Patient alive');
    },2000);
});

FriendsBringFIR.then((callback1)=>{
    console.log(`${callback1} being verified`);
    CheckingIfAlive.then((status)=>{
        console.log(`${status} please Admit`);
    }).then(()=>{
        console.log('Patient3:admitted');
    });
});


console.log('Patient4:admitted');
console.log('Patient5:admitted');