//Primitive Datatype
        // 7 Datatype : String ,Number,Boolean ,Null ,Undefined,Symbol ,BigInt 

//Reference Type Thats Also called non-premitive
        //:Array , Object , And Functions

const score=100
const scoreValue=100.3
const isLoggedIn=false;
const outside=null;

const id=Symbol('212');
const anatherid=Symbol('212')

console.log(anatherid==id)

const bigNumber=345677885378n
console.log(bigNumber)

const heros =["shaktiman","ohm","yash"]
let myobj={
    name: "patil",
    age :12,

}
let a=function(){
    console.log("hello");
}
let num=""
console.log(heros)
console.log(typeof myobj)
console.log(typeof a)
console.log(typeof num)