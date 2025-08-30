const name="ompatil";
const num=32;
// console.log(name+num+"ssgme");
// above aproach not a valid so we used backstick it
console.log(`hello my name is ${name} and my num is ${num}`);//it is also called as string interpolation
const gamename=new String("Patil-Om");
const str="om";
console.log((gamename[0]));
console.log(gamename.__proto__);
console.log(gamename.length)
console.log(gamename.charAt(3));
console.log(gamename.indexOf('t'));
const strr=gamename.substring(0,4);
console.log(strr);
const anotherString = gamename.slice(-8,-4)
console.log(anotherString);
const newStringone="   patil    "
console.log(newStringone.trim());
const url= "i am now third year it student";
const a=url.replace('third','forth')
console.log(url.includes('afdm'));
console.log(url);
console.log(a);
