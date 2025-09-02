const objectnew=new Object();

objectnew.id="1233abx";
objectnew.name="ohm"
// console.log(objectnew)
const antherobject ={}
// console.log(antherobject)

const regularUser ={
    email : "some@gmail.com",
    fullname :{
        userfullname :{
            firstname:"ohm",
            lastname :"patil"
        }
    }

}
// console.log(regularUser.fullname.userfullname.lastname)

const obj1={1 :"a", 2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

const obj3={...obj1,...obj2}
// console.log(obj3)

const user =[
    {
    

    }
]
console.log(objectnew)
console.log(Object.values(objectnew))
console.log(Object.keys(objectnew))
console.log(Object.entries(objectnew))
console.log(objectnew.hasOwnProperty("name"))