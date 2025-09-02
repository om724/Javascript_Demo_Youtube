const name="ompatil";
const num=32;
// console.log(name+num+"ssgme");
// above aproach not a valid so we used backstick it
console.log(`hello my name is ${name} and my num is ${num}`);//it is also called as string interpolatio
const MyStr=new String("ohmpatil");

// console.log(typeof MyStr);
// console.log(big(MyStr ));

const str="2+2";
const strname=new String("2+2");
// console.log(eval(str));
// console.log(eval(strname.valueOf()));

const sentence="the Quick brown fox jumps over the llazy dog.";
let index=5;
console.log(`An Index Of ${index}return the character ${sentence.at(index)}`);


function returnLast(str) {
  return str.at(-1);
}

let invoiceref="my-invoice01";
console.log(returnLast(invoiceref));

let invoiceRef="my-invoice02";
console.log(returnLast(invoiceRef));
