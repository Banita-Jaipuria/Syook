function trails(userInput){
    let number=userInput;
    let counter=0;
    while(number!=1){
        if(number%2==0){
            number=number/2;
            counter+=1;
        }
        else{
            number=(number*3)+1;
            counter+=1;
        }
    }
    return counter;
}
var value=trails(12);
console.log(value);