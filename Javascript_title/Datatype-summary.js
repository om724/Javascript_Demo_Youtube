//Primitive Datatype
        // 7 Datatype : String ,Number,Boolean ,Null ,Undefined,Symbol ,BigInt 

//Reference Type Thats Also called non-premitive

//:Array , Object , And Functions

      const name="om"
      const num=12
      const IsLogging=true;
      const st=null
      const num1=undefined
      let a=Symbol('123');
      let b=Symbol('123');
    //   console.log(a==b);
      const heros=['om','pushkar','patil','Rajesh'];

      let na ={
        name:'om',
        age:12
      }
      let k=function(){
        console.log("hello world");
      }
    //   console.log(heros);
    //   console.log(na);
    //   console.log(k);
    //   console.log(typeof heros);
    //   console.log(typeof na)
    //   console.log(typeof k);

      /***************Memory****************** */
      //Stack(Primitive) and Heap(Non-Primitive)

      let myname="om"

      let anathername=myname;
      anathername="patil";
    //   console.log(myname);
    //   console.log(anathername);
      let userOne={
        email :"om@google.com",
        upi: "user@ybl"

      }

      let userTwo=userOne;
      userTwo.email="chetan@gmail.com";

    //   console.log(userOne.email);
    //   console.log(userTwo.email);
