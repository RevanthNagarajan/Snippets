
let grammy = async(xxx) => {
//let grammy = (xxx) => {
    const ary1 = [1,5,4,9,6];
    const ary2 = [[1,4,2],[1,4,9],[3,1,6]];
    var matchFound = null;
    /*for(cluster of ary2){
        if(ary1.includes(cluster[0]) && ary1.includes(cluster[1]) && ary1.includes(cluster[2])){
            matchFound = true;
            console.log(cluster);
            break;
        }
    }*/
    ary2.forEach((cluster)=>{
        if(ary1.includes(cluster[0]) && ary1.includes(cluster[1]) && ary1.includes(cluster[2]) && !matchFound){
            matchFound = true;
            //console.log(cluster);
        }
    });
    //foo();
    console.log(xxx);
    //console.table(ary2);
    //console.timeEnd('total_time');
    return matchFound;
};

let grammyGoesTo = async(Xtreme) => {
    console.log('here',Xtreme);
};
console.time('total_time');
/*console.time('total_time');
preRequisite();
var xtreme = grammy();
grammyGoesTo(xtreme);
console.log('asPromised');*/
var xtreme;
let triggerGrammy = async() => {
    const a = grammy(1111);
    const b = grammy(2222);
    const c = grammy(3333);
    const d = await Promise.all([a,b,c]);
    return d;
};
Promise.resolve()
            .then(()=>{xtreme = triggerGrammy();})
            .then(()=>{grammyGoesTo(xtreme);console.timeEnd('total_time');})
            .catch((err)=>{console.log('gotcha',err);console.timeEnd('total_time');});
