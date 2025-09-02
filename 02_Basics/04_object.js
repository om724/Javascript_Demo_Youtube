const Student ={
    name:"OHm",
    age:30,
    location:"Malkapur",
    email:"ompatil@gmail.com",
    isLogged:true

}
// console.log(Student)
const username=new Object();
username.id="1234";
username.name="roshn";
// console.log(username)

const RegularInfo ={
    Full_Name:{
        User_Name:{
            First_name :"om",
            Last_name :" Patil"
        }
    }
}
// console.log(RegularInfo.Full_Name.User_Name.Last_name)
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// console.log(obj3)
//const obj3=Object.assign({},obj1,obj2);
//console.log(obj3)
const obj3={...obj1,...obj2};
// console.log(obj3);
console.log(Student.hasOwnProperty("namee"));