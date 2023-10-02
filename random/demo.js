function VowelSquare(strArr) { 
    let vowels = ['a','e','e','o','u'];
    let matrixCount = 0;
    let matrixIndex = null;
    let formedMatrixrow1 = [];
    let formedMatrixrow2 = [];
    let row1 = null;
    let row2 = null;
    strArr.forEach((str,topindex) => {
      if(formedMatrixrow2.length!==2 && formedMatrixrow1.length!==2){
        str = str.split('');
        if(matrixCount<2){
          matrixCount=0;
          matrixIndex=null;
          formedMatrixrow2 =[];
          formedMatrixrow1 = [];
          row2 = null;
          row1 = null;
        }
        str.forEach((inner,index)=> {
          if(matrixCount>=2 && row1!==topindex){
            if(vowels.includes(inner) && (matrixCount>=2 && matrixCount<4)){
              formedMatrixrow2.push(inner);
              matrixCount++;
              row2 = row2 ? row2 : topindex;
              console.log('2',formedMatrixrow2);
            }
          }else {
            if(vowels.includes(inner) && (matrixCount>=0 && matrixCount<2)){
              formedMatrixrow1.push(inner);
              matrixCount++;
              matrixIndex = matrixIndex ? matrixIndex :index;
              row1 = matrixIndex ? row1 : topindex;
              console.log('1',formedMatrixrow1);
            }
          }
        });
      }
    });
    // code goes here 
    result = row1+'-'+row2;
    document.write(result);
  
  }


  var input = ["aqrst", "ukaei", "ffooo"];
  VowelSquare(input);