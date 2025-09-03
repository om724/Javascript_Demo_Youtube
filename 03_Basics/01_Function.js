function sayMyfunction(){
console.log("p")
console.log("a")
console.log("t")
console.log("i")
console.log("l")

}
// sayMyfunction()
function Addtwonumber(number1,number2){
        return number1+number2;
}
const result=Addtwonumber(3,6);
// console.log(result);

function LoginUserMessage(username){
    if(username==="om"){
        console.log("Successful login");
        return 
    }
    return `${username} just logged in`
}
const resultone=LoginUserMessage("omm")
// console.log(resultone)




function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(7,352,87,89,100));

const user= {
    username:"hitesh",
    price:100
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject({
    username:"omi",
    price:200
});

const myNewArray=[200,400,100,600];
function returnSecondArray(getarray){
    return getarray

}
console.log(returnSecondArray(myNewArray));