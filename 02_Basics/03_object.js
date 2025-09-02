//Singleton
// Object.create to ye ye constructor method se tarih se bana 

//Object literals

const mysym =Symbol("Key1")

const Jsuser ={
    name:"om",
    [mysym]:"myKey1",
    age :19,
    location :"malkapur",
    email:"ompatil@gmail.com",
    isLoggedin:false,
    lastLogindays :["Monday","Saturday"]


}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser.isLoggedin);
// console.log(Jsuser["isLoggedin"]);
// console.log(typeof Jsuser[mysym]);

// Jsuser.email="chetan@gamil.com";
// console.log(Jsuser);
// Jsuser.name="cheatan";
// console.log(Jsuser)
// Object.freeze(Jsuser);
// Jsuser.name="Yash";
// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello JS User");
}
console.log(Jsuser.greeting())