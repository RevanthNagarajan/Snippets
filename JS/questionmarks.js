function QuestionsMarks() { 
    var str = document.getElementById("questionInput").value;
    var x = str.split('');
    //console.log(x);
    var result = false;
    var countOdQuestionMarks= 0;
    x.forEach((sep)=>{
        if(countOdQuestionMarks!==3){
            if(Number(sep)<10){
                //console.log(sep);
                countOdQuestionMarks = 0;
            }else{
                if(sep==='?'){
                countOdQuestionMarks++;
                }
            }
        }
    });
    // code goes here  
    result = (countOdQuestionMarks===3) ? true : false;
    
    document.getElementById('result').innerHTML = String(result);
}

