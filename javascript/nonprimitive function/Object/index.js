// object means key & value Collection
// two types of object literals{} & constructor function
// this is for literals{}

// let emp={
//     eName:"Akshay",
//     eid:123,
//     eplace:"pune"
// }
// console.log(emp);
// console.table(emp);
// console.log('employee id '+emp.eid);
// emp.epin=56007;
// console.log(emp);
// console.error("i am error")
// console.warn("i am warning")
// call,apply,bind


// nested object
// let stu={
//     sname:"pallavi",
//     sid:123,
//     splace:{
//         Sstreat:"RMCircle",
//         Scity:"MYsore"
//     }
// }
// console.log(stu);
// stu.splace.spin=56007
// console.table(stu)

// document.write(`My name is ${stu.sname} & my student id is ${stu.sid} i am came from ${stu.splace.Scity}`)
// console.log(Object.keys(stu));                          
// console.log(Object.values(stu));
// console.log(Object.entries(stu));

// this keyword is clone of an windows
// constructor function
function emp(name,id,gender){
    this.name=name;
    this.id=id;
    this.gender=gender
}
let e1=new emp(`pallavi`,777,`female`)
let e2=new emp(`vikas`,888,`male`)
console.log(e1);
console.log(e2);
console.table(e1);


// new object kay karto.......
let person=new Object()
person.name="shashank"
person.place="pune"
person.gender="male"
console.log(person);