const user ={
    username :"Hitesh",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username}welcome to website `);
    }
}
// user.welcomeMessage();

// function chai() {
//     let username="om"
//     console.log(this.username);
// }
// chai()

const addtwo = (num1,num2)=>
     (num1+num2);

console.log(addtwo(9,4))