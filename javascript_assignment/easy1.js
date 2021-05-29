function checkPerfect(userInput){
    let val=userInput;
    let sum=0;
    for(let i=0;i<userInput;i++){
        if(userInput%i==0){
            sum=sum+i;
        }
    }
    if (sum==userInput) {
        return "Perfect";
    } else if(sum>userInput){
        return "Abundant";
    }
    else if(sum<userInput){
        return "Deficient";
    }
}
var value=checkPerfect(6);
console.log(value);