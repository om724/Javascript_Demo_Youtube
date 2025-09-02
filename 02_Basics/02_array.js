const myBro=["pritesh","Aniket","Rajesh","Jayesh"];
const Myfrie=["Riddhesh","Shree"];
myBro.push(Myfrie);
const Mydata=myBro.concat(Myfrie);
// console.log(Mydata);
const all_new_data=[...myBro,...Myfrie];
// console.log(all_new_data);


const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const myreal_anather= another_arr.flat(Infinity)
console.log(myreal_anather)

//Data Sciping Data fetch karto teva to kontya pn formta madhe yeto 
console.log(Array.isArray("om"))

console.log(Array.from("om"))
console.log(Array.from({name:"ohm"}))
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
