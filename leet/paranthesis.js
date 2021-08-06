/*function addMultipleEnclose(val) {
    let res = [...val]
    val.forEach(element => {
        let newEl = element;
        let count = 0; 
        let seqInd = [];
        
        for(let i=0; i<element.length; i++ ) {
            if(newEl[i]==="(" && newEl[i+1]&&newEl[i+1]===")" && newEl[i+2]&&newEl[i+2]==="(" && newEl[i+3]&&newEl[i+3]===")"){
                count++;
                seqInd.push(i);
            }
        }
        for(let j = 0; j<count; j++) {
            newEl = [...element];
            newEl[seqInd[j]+1]="(";
            newEl[seqInd[j]+2]=")";
            newEl = newEl.reduce((ac,ed)=>ac+ed,"");
            if(!res.includes(newEl)) { 
                res.push(newEl) 
                let count2 = 0;let seqInd2 = [];
                for(let i=0; i<element.length; i++ ) {
                    if(newEl[i]===")" && newEl[i-1]&&newEl[i-1]===")" && newEl[i+1]&&newEl[i+1]==="(" && newEl[i+2]&&newEl[i+2]===")") {
                        count2++;
                        seqInd2.push(i);
                    }
                }
                console.log(count2, newEl)
                for(let j = 0; j<count2; j++) {
                    newEl = [...newEl];
                    newEl[seqInd2[j]]="(";
                    newEl[seqInd2[j]+1]=")";
                    newEl = newEl.reduce((ac,ed)=>ac+ed,"");
                    console.log(seqInd2[j])
                    if(!res.includes(newEl)) { res.push(newEl) };
                }
            };
        }
        
        
    });
    return res;
}

let generateCombos = (n) => {
    let i = n;
    let model = "";
    let result = [];
    while(i!=0){
        model = model+"()";
        i--;
    }
    result.push(model);
    for(i=n;i>0;i--){
        let front = ""; let back = ""; let mid = "";
        for(let j=i;j>0;j--){
            front = front+"(";
            back = back+")";
        }
        for(let k=0; k<n-i; k++) {
            mid = mid+"()"
        }
        let sum = front+mid+back;
        if(!result.includes(sum)) { result.push(sum) };
    }
    console.log("init",result.length)
    result = addMultipleEnclose(result);
    return result;
}*/
const generateParentheses = (n) => {
    const result = [];
    bfs("", 0, 0);
    return result;
    function bfs(str, left, right) {
      if (left === n && right === n) {
        result.push(str);
        return;
      }
      if (left !== n) {
        bfs(str + "(", left + 1, right);
      }
      if (left > right) {
        bfs(str + ")", left, right + 1);
      }
    }
  }
console.log(generateParentheses(4))