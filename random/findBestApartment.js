let blocks = [
    { gym : false, school : true, store : false },
    { gym : true, school : false, store : false },
    { gym : true, school : true, store : false },
    { gym : false, school : true, store : false },
    { gym : false, school : true, store : true }
];

let reqs = ["gym","school","store"];

// Map {0 : {[..req] keyes : dist}}
// loop into blocks, for each block check the absolute distance of each of the convenience buildidngs
// entry in map the abs distance if the distance is infinite or it is less than the current value.

function findBestApartment() {
    if(!blocks.length || !reqs.length) return [];

    let map = {};
    let near;

    blocks.forEach((x,ind) => {  //O(n)
        map[ind] = {...reqs};
        map[ind] = {...x}
        if(!near) near = {...x}
    });
    
    reqs.forEach((x,ind) => near[x]=[])

    Object.keys(map).forEach((x,i)=>{ 
        Object.keys(map[x]).forEach(y=>{ //O(nr)
            if(map[x][y]===true) near[y].push(i)
            map[x][y] = map[x][y]===true ? 0 : Number.MAX_VALUE;
        })
    })
    let count = 0;

    /* Brute force (O(n^2*r))
    // for(let i=0; i<blocks.length; i++) { //O(n)
    //     for(let j=0; j<blocks.length; j++){ //O(n-1)
    //         if(i===j) continue;
    //         Object.keys(map[i]).forEach(facillity=>{ //O(r)
    //             count++;
    //             if((map[i][facillity] !== 0 ||  map[i][facillity] !== 1) && blocks[j][facillity] === true && Math.abs(i-j)<map[i][facillity]) 
    //                 map[i][facillity] = Math.abs(i-j);
    //         })
    //     }
    // }
    */


    //let near = {gym : [1,2], school : [0,2,3,4], store : [4]}

    
    let findClosest = (fac,ind) => {
        near[fac].forEach(y=>{
            count++;
            map[ind][fac] = Math.min(Math.abs(ind-y),map[ind][fac])
        })
    }
    /** Optimised  O(n*r^2) */
    for(let i=0; i<blocks.length; i++) { //O(n)
        Object.keys(map[i]).forEach(facillity=>{ //O(r)
            //count++;
            if((map[i][facillity] !== 0 ||  map[i][facillity] !== 1)) {
                findClosest(facillity,i)
            }
        })
    }

    
    let bestBlock; let bestCount = Number.MAX_VALUE;
    Object.keys(map).forEach(x=>{
        let temp = 0;
        Object.keys(map[x]).forEach(y=>{ //O(nr)
            if(map[x][y]>temp) temp = map[x][y];
        })
        if(temp<bestCount) { bestCount = temp; bestBlock = x }
    })
    console.log(bestBlock,count);
    return bestBlock;
}

findBestApartment(blocks,reqs);